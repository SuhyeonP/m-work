import { Summary } from 'component/molecules';
import styled from '@emotion/styled';

const MainSumariesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainSummaries = (): JSX.Element => {
  return (
    <MainSumariesStyled>
      <Summary name="홍길동" aliases="test" title="title" books={3} tvSeries={2} id="12" />
    </MainSumariesStyled>
  );
};
