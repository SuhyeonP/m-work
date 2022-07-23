import { colors } from 'style/colors';
import styled from '@emotion/styled';

interface IStyledProps {
  border_radius: string;
  color: keyof typeof colors;
  background_color: keyof typeof colors;
}

export const ButtonStyled = styled.button<IStyledProps>(
  ({ border_radius, color, background_color }) => `
  border-radius: ${border_radius};
  color: ${color};
  background-color: ${background_color};
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
  color = 'default_gray',
  background_color = 'default_white',
}: IProps): JSX.Element => {
  return (
    <ButtonStyled id={id} background_color={background_color} color={color} border_radius={border_radius}>
      {content}
    </ButtonStyled>
  );
};
