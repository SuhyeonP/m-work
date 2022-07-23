import styled from '@emotion/styled';
import { FilterButton } from 'component/atom';
import { IFilterContent } from 'types';
import { Dispatch, SetStateAction } from 'react';

const FilterStyled = styled.div``;

interface IProps {
  contents: IFilterContent[];
  selected: number | string;
  setSelected: Dispatch<SetStateAction<string | number>>;
}

export const Filters = ({ contents, selected, setSelected }: IProps): JSX.Element => {
  const checkEvent = (e: any) => {
    setSelected(e.target.id);
  };

  return (
    <FilterStyled onClick={checkEvent}>
      {contents.map(content => (
        <FilterButton
          content={content.content}
          value={content.value}
          key={content.content}
          checked={selected === content.value}
        />
      ))}
    </FilterStyled>
  );
};
