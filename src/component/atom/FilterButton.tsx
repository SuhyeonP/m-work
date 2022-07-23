import { IFilterContent } from 'types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from 'style/colors';

interface IStyledProps {
  checked: boolean;
}

const FilterButtonStyled = styled.button<IStyledProps>(
  ({ checked }) => css`
    background-color: ${colors.gray};
    color: ${checked ? colors.blue : colors.default_gray};

    outline: 0;
    border: 0;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 4px;
  `
);

type IProps = Partial<IStyledProps> & IFilterContent;

export const FilterButton = ({ content, value, checked = false }: IProps): JSX.Element => {
  return (
    <FilterButtonStyled id={String(value)} checked={checked} type="button">
      # {content}
    </FilterButtonStyled>
  );
};
