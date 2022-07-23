import styled from '@emotion/styled';
import { Button, Typography } from 'component/atom';
import { Information } from 'types';
import { colors } from 'style/colors';

const SummaryStyled = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  border: 1px solid ${colors.default_black};

  height: 100px;
`;

type IProps = Information;

export const Summary = ({ books, name, titles, tvSeries, aliases }: IProps): JSX.Element => {
  return (
    <SummaryStyled>
      <div>
        <div>
          <Typography content={name} />
          <Typography content={aliases[0]} />
        </div>
        <Typography content={titles.join(',')} />
        <div>
          <Typography content={`books: ${books.length}`} />
          <Typography content={`tvSeries: ${tvSeries.length}`} />
        </div>
      </div>
      <Button content="삭제" id={String(name)} />
    </SummaryStyled>
  );
};
