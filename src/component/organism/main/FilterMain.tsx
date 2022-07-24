import { Filters } from 'component/molecules';
import { IFilterContent } from 'types';
import { useAtom } from 'jotai';
import { filterAtom } from 'pages/Home';

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
  const [selected, setSelected] = useAtom(filterAtom);

  const setting = (e: any) => {
    if (selected === e.target.id || e.target.id === 'reset') {
      setSelected('');
    } else {
      setSelected(e.target.id);
    }
  };

  return <Filters contents={options} selected={selected} setting={setting} />;
};
