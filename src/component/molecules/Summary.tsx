import styled from '@emotion/styled';
import { Button, Typography } from 'component/atom';
import { Information } from 'types';
import { colors } from 'style/colors';
import { css } from '@emotion/react';

const SummaryStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 2px solid ${colors.default_black};

  height: 100px;
  padding: 10px;
  margin: 10px;

  .inner-content {
    display: flex;
    flex-direction: column;

    width: 70%;
    max-width: 70%;
    & > div {
      margin: 5px 0;
    }
  }

  .name-aliases {
    display: flex;
  }

  .delete-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .count-info {
    display: flex;
    justify-content: space-between;
  }
`;

interface IProps extends Information {
  idx: number;
}

export const Summary = (props: IProps): JSX.Element => {
  const { name, aliases, titles, tvSeries, books, idx } = props;
  return (
    <SummaryStyled>
      <div className="inner-content">
        <div className="name-aliases">
          <Typography content={`name: ${name}`} text_overFlow="ellipsis" />
          <Typography content={`aliases: ${aliases.join(',')}`} text_overFlow="ellipsis" />
        </div>
        <Typography content={`title: ${titles.join(',')}`} text_overFlow="ellipsis" />
        <div className="count-info">
          <Typography content={`books: ${books.length}`} />
          <Typography content={`tvSeries: ${tvSeries.length}`} />
        </div>
      </div>
      <div className="delete-button">
        <Button content="삭제" id={JSON.stringify(idx)} border_radius="20px" />
      </div>
    </SummaryStyled>
  );
};
