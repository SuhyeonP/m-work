import { FilterMain, MainSummaries } from 'component/organism/main';
import { Typography } from 'component/atom';
import styled from '@emotion/styled';
import { atom } from 'jotai';
import { Suspense } from 'react';

const HomeStyled = styled.div`
  padding: 15px;

  .main-title {
    display: block;
    text-align: center;
    padding: 10px 0;
  }
`;

export const filterAtom = atom<any[]>([]);

const Home = (): JSX.Element => {
  return (
    <HomeStyled>
      <div className="main-title">
        <Typography content="무신사 과제" font_size="22px" font_weight={600} font_color="default_black" />
      </div>
      <FilterMain />
      <Suspense fallback={<>loading</>}>
        <MainSummaries />
      </Suspense>
    </HomeStyled>
  );
};

export default Home;
