import { Filters } from 'component/molecules';
import { useState } from 'react';
import { IFilterContent } from 'types';

const options: IFilterContent[] = [
  {
    value: 'alive',
    content: '생존인물만',
  },
  {
    value: 'woman',
    content: '여자',
  },
  {
    value: 'no-tv-series',
    content: 'tvSeries 없음',
  },
  {
    value: 'reset',
    content: '초기화',
  },
];

export const FilterMain = (): JSX.Element => {
  const [selected, setSelected] = useState<any>();

  return <Filters contents={options} selected={selected} setSelected={setSelected} />;
};
