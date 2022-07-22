import styled from '@emotion/styled';

const FilterButtonStyled = styled.input``;

interface IProps {
  content: string | number;
  value: string | number;
}

export const FilterButton = ({ content, value }: IProps): JSX.Element => {
  return (
    <FilterButtonStyled value={value} type="radio">
      {content}
    </FilterButtonStyled>
  );
};
