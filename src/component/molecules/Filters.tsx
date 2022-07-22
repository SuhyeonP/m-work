import styled from '@emotion/styled';
import { FilterButton } from 'component/atom';

const FilterStyled = styled.div``;

interface IFilterContent {
  value: string | number;
  content: string | number;
}

interface IProps {
  contents: IFilterContent[];
}

export const Filters = ({ contents }: IProps): JSX.Element => {
  return (
    <FilterStyled>
      {contents.map(content => (
        <FilterButton content={content.content} value={content.value} key={content.content} />
      ))}
    </FilterStyled>
  );
};

export default Filters;
