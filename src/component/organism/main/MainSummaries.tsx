import { Summary } from 'component/molecules';
import styled from '@emotion/styled';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { Fragment, useEffect, useState } from 'react';
import { Information } from '../../../types';
import { nanoid } from 'nanoid';
import { useInView } from 'react-intersection-observer';
import { useAtom } from 'jotai';
import { filterAtom } from 'pages/Home';

const MainSummariesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IRes {
  page: number;
  data: Information[];
  isLast: boolean;
  filter: string;
}

const fetchList = async (pageParams: number, filter: any[]) => {
  let queryData = '';

  filter.forEach(option => {
    if (option !== 'no-tv-series') {
      queryData += `&${option}=${option === 'gender' ? 'Female' : 'true'}`;
    }
  });

  let dd: Information[] = await fetch(
    `https://www.anapioficeandfire.com/api/characters?page=${pageParams}&pageSize=10${queryData}`
  ).then(res => res.json());
  const newPage = pageParams + 1;
  if (filter.includes('no-tv-series')) {
    dd = dd.filter(ele => ele.tvSeries[0] === '');
  }
  return { data: dd, page: newPage, isLast: newPage === 11, filter };
};

export const MainSummaries = (): JSX.Element => {
  const [filter] = useAtom(filterAtom);
  const [ref, inView] = useInView();
  const [datas, setDatas] = useState<Information[]>([]);
  const { isFetchingNextPage, fetchNextPage } = useInfiniteQuery<any, any, IRes>(
    ['infos', filter],
    ({ pageParam = 1 }) => fetchList(pageParam, filter),
    {
      getNextPageParam: lastPage => (!lastPage.isLast ? lastPage.page : undefined),
      onSuccess: res => {
        const copy: Information[] = [];
        res.pages.forEach(ele => {
          copy.push(...ele.data);
        });
        setDatas(copy);
      },
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const deleteCharacter = (e: any) => {
    if (e.target.tagName === 'BUTTON') {
      const copy = datas.slice();
      copy.splice(parseInt(e.target.id), 1);
      setDatas(copy);
    }
  };

  return (
    <MainSummariesStyled onClick={deleteCharacter}>
      {datas.map(
        (
          {
            aliases,
            allegiances,
            books,
            born,
            culture,
            died,
            father,
            gender,
            mother,
            name,
            playedBy,
            povBooks,
            spouse,
            titles,
            tvSeries,
            url,
          },
          idx
        ) => (
          <Fragment key={nanoid(3)}>
            <Summary
              aliases={aliases}
              allegiances={allegiances}
              books={books}
              born={born}
              culture={culture}
              died={died}
              father={father}
              gender={gender}
              mother={mother}
              name={name}
              playedBy={playedBy}
              povBooks={povBooks}
              spouse={spouse}
              titles={titles}
              tvSeries={tvSeries}
              url={url}
              idx={idx}
            />
          </Fragment>
        )
      )}
      {isFetchingNextPage ? <p>loading</p> : <div ref={ref} style={{ margin: '10px' }} />}
    </MainSummariesStyled>
  );
};
