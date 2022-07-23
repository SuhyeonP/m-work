import { IFilterContent } from 'types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from 'style/colors';

interface IStyledProps {
  checked: boolean;
}

const FilterButtonStyled = styled.button<IStyledProps>(
  ({ checked }) => css`
    background-color: ${checked ? colors.default_gray : '#fffff3'};
  `
);

type IProps = Partial<IStyledProps> & IFilterContent;

export const FilterButton = ({ content, value, checked = false }: IProps): JSX.Element => {
  return (
    <FilterButtonStyled id={String(value)} checked={checked} type="button">
      {content}
    </FilterButtonStyled>
  );
};
