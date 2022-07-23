import { Summary } from 'component/molecules';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const MainSumariesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainSummaries = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { data } = useInfiniteQuery(['infos', page], () =>
    fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=10`).then(data => data.json())
  );

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <MainSumariesStyled>
      <Summary name="홍길동" aliases="test" title="title" books={3} tvSeries={2} id="12" />
    </MainSumariesStyled>
  );
};
