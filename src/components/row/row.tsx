import { RowT } from '../../types/row';
import { StyledCell } from './styled';
import { formatter } from '../format';

const cellTextAlign = (colName: string) => (colName === 'Champion' ? 'left' : 'center');

export const Row = (props: { row: RowT; columns: Array<keyof RowT>; number: number }) => {
  const { row, columns = [], number } = props;

  return (
    <tr>
      {columns.map((column, i) => {
        const textAlign = cellTextAlign(column);
        return (
          <StyledCell align={textAlign} key={i}>
            {column !== '#' ? formatter(column, row[column]) : number}
          </StyledCell>
        );
      })}
    </tr>
  );
};
