import styled from '@emotion/styled';
import { colors } from 'style/colors';

interface IStyledProps {
  font_size: string;
  font_weight: string | number;
  font_color: keyof typeof colors;
}

const TypographyStyled = styled.span<IStyledProps>(
  ({ font_size, font_weight, font_color }) => `
  font-size: ${font_size};
  font-weigth: ${font_weight};
  font-color: ${font_color};
`
);

interface IProps extends IStyledProps {
  content: string | number;
}

export const Typography = ({ content, font_size, font_weight, font_color }: IProps): JSX.Element => {
  return (
    <TypographyStyled font_size={font_size} font_weight={font_weight} font_color={font_color}>
      {content}
    </TypographyStyled>
  );
};
