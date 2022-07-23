import styled from '@emotion/styled';
import { Button, Typography } from 'component/atom';
import { ISummaryContent } from 'types';
import { colors } from 'style/colors';

const SummaryStyled = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  border: 1px solid ${colors.default_black};
`;

type IProps = ISummaryContent;

export const Summary = ({ id, books, name, title, tvSeries, aliases }: IProps): JSX.Element => {
  return (
    <SummaryStyled>
      <div>
        <div>
          <Typography content={name} />
          <Typography content={aliases} />
        </div>
        <Typography content={title} />
        <div>
          <Typography content={`books: ${books}`} />
          <Typography content={`tvSeries: ${tvSeries}`} />
        </div>
      </div>
      <Button content="삭제" id={String(id)} />
    </SummaryStyled>
  );
};
