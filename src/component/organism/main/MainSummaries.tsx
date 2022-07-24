import { Summary } from 'component/molecules';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useCallback, useEffect, useState } from 'react';
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
  const [datas, setDatas] = useState<IRes[]>([]);
  const { isFetchingNextPage, fetchNextPage } = useInfiniteQuery<any, any, IRes>(
    ['infos', filter],
    ({ pageParam = 1 }) => fetchList(pageParam, filter),
    {
      getNextPageParam: lastPage => (!lastPage.isLast ? lastPage.page : undefined),
      onSuccess: res => {
        setDatas(res.pages);
      },
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const deleteCharacter = useCallback(
    (e: any) => {
      if (e.target.tagName === 'BUTTON') {
        const [start, idx] = e.target.id.split('-').map((ele: string) => Number(ele));
        setDatas(prev => {
          const copy = prev[start].data.slice();
          copy.splice(idx, 1);
          prev[start].data = copy;
          return prev;
        });
      }
    },
    [datas]
  );

  return (
    <MainSummariesStyled onClick={deleteCharacter}>
      {datas.map((page, idx1) =>
        page.data.map(
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
            idx2
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
                where={`${idx1}-${idx2}`}
              />
            </Fragment>
          )
        )
      )}
      {isFetchingNextPage ? <p>loading</p> : <div ref={ref} style={{ margin: '10px' }} />}
    </MainSummariesStyled>
  );
};
