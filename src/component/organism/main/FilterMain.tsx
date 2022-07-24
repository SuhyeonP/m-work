import { Filters } from 'component/molecules';
import { IFilterContent } from 'types';
import { useAtom } from 'jotai';
import { filterAtom } from 'pages/Home';

const options: IFilterContent[] = [
  {
    value: 'isAlive',
    content: '생존인물만',
  },
  {
    value: 'gender',
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
    if (e.target.id === 'reset') {
      setSelected([]);
    } else if (selected.includes(e.target.id)) {
      setSelected(prev => {
        prev.splice(prev.indexOf(e.target.id), 1);
        return prev.map(ele => ele);
      });
    } else {
      setSelected(prev => {
        return [...prev, e.target.id];
      });
    }
  };

  return <Filters contents={options} selected={selected} setting={setting} />;
};
