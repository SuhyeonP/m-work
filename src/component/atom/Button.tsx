import { colors } from 'style/colors';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';

interface IStyledProps {
  border_radius: string;
  color: keyof typeof colors;
  background_color: keyof typeof colors;
  width: string;
  height: string;
  styles?: SerializedStyles;
}

export const ButtonStyled = styled.button<IStyledProps>(
  ({ border_radius, color, background_color, width, height }) => `
  border-radius: ${border_radius};
  color: ${colors[color]};
  background-color: ${colors[background_color]};
  width: ${width};
  height: ${height};
  
  outline: 0;
  border: 0;
`
);

interface IProps extends Partial<IStyledProps> {
  content: string | number;
  id?: string;
}

export const Button = ({
  id,
  content,
  border_radius = '4px',
  color = 'default_white',
  background_color = 'default_black',
  width = '80px',
  height = '40px',
  styles,
}: IProps): JSX.Element => {
  return (
    <ButtonStyled
      id={id}
      background_color={background_color}
      color={color}
      border_radius={border_radius}
      width={width}
      height={height}
      css={styles}
      type="button"
    >
      {content}
    </ButtonStyled>
  );
};
