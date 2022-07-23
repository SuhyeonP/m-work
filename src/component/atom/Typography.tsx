import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { colors } from 'style/colors';
import { css } from '@emotion/react';

interface IStyledProps {
  font_size: string;
  font_weight: string | number;
  font_color: keyof typeof colors;
  text_overFlow: CSSProperties['textOverflow'];
}

const TypographyStyled = styled.span<IStyledProps>(({ font_size, font_weight, font_color, text_overFlow }) => {
  const common = css`
    font-size: ${font_size};
    font-weight: ${font_weight};
    color: ${colors[font_color]};
    text-overflow: ${text_overFlow};
  `;
  if (text_overFlow === 'ellipsis') {
    return css`
      ${common};
      white-space: nowrap;
      overflow: hidden;

      width: 100%;
      max-width: 100%;
    `;
  }
  return css`
    ${common};
  `;
});

interface IProps extends Partial<IStyledProps> {
  content: string | number;
}

export const Typography = ({
  content,
  font_size = '16px',
  font_weight = 400,
  font_color = 'default_gray',
  text_overFlow = 'unset',
}: IProps): JSX.Element => {
  return (
    <TypographyStyled
      font_size={font_size}
      font_weight={font_weight}
      font_color={font_color}
      text_overFlow={text_overFlow}
    >
      {content}
    </TypographyStyled>
  );
};
