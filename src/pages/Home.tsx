import { FilterMain, MainSummaries } from 'component/organism/main';
import { Typography } from 'component/atom';

const Home = (): JSX.Element => {
  return (
    <>
      <Typography content="무신사 과제" font_size="22px" font_weight={600} font_color="default_black" />
      <FilterMain />
      <MainSummaries />
    </>
  );
};

export default Home;
