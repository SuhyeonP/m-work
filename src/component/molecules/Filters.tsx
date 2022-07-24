import styled from '@emotion/styled';
import { FilterButton } from 'component/atom';
import { IFilterContent } from 'types';

const FilterStyled = styled.div``;

interface IProps {
  contents: IFilterContent[];
  selected: number | string;
  setting: (e: any) => void;
}

export const Filters = ({ contents, selected, setting }: IProps): JSX.Element => {
  return (
    <FilterStyled onClick={setting}>
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
