import styled from '@emotion/styled';
import { FilterButton } from 'component/atom';
import { IFilterContent } from 'types';

const FilterStyled = styled.div``;

interface IProps {
  contents: IFilterContent[];
  selected: any[];
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
          checked={selected.includes(content.value)}
        />
      ))}
    </FilterStyled>
  );
};
