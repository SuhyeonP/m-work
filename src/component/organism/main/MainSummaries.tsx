import { Summary } from 'component/molecules';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import { Information } from '../../../types';
import { nanoid } from 'nanoid';
import { useInView } from 'react-intersection-observer';
import { useAtom } from 'jotai';
import { filterAtom } from 'pages/Home';

const MainSumariesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IRes {
  page: number;
  data: Information[];
}

const fetchList = async (pageParams: number, filter: string) => {
  console.log(filter);
  let queryData = '';
  switch (filter) {
    case 'woman':
      queryData = `&gender=${filter === 'woman' ? 'Female' : 'Male'}`;
      break;
    case 'alive':
      queryData = `&isAlive=true`;
      break;
    default:
      break;
  }

  const dd = await fetch(
    `https://www.anapioficeandfire.com/api/characters?page=${pageParams}&pageSize=10${queryData}`
  ).then(res => res.json());
  const newPage = pageParams + 1;
  return { data: dd, page: newPage, isLast: newPage === 11 };
};

export const MainSummaries = (): JSX.Element => {
  const [filter] = useAtom(filterAtom);
  const [ref, inView] = useInView();
  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery<any, any, IRes>(
    ['infos', filter],
    ({ pageParam = 1 }) => fetchList(pageParam, filter),
    {
      getNextPageParam: lastPage => (!lastPage.isLast ? lastPage.page : undefined),
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <MainSumariesStyled>
      {data?.pages.map((page, idx1) =>
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
              />
            </Fragment>
          )
        )
      )}
      {isFetchingNextPage ? <p>loading</p> : <div ref={ref} style={{ margin: '10px' }} />}
    </MainSumariesStyled>
  );
};
