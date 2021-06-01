import { RowT } from '../../types/row';
import { StyledCell } from './styled';
import { formatter } from '../format';

export const Row = (props: { row: RowT; columns: Array<keyof RowT>; number: number }) => {
  const { row, columns = [], number } = props;
  return (
    <tr>
      {columns.map((column, i) => {
        return (
          <StyledCell align={column === 'Champion' ? 'left' : 'center'} key={i}>
            {column !== '#' ? formatter(column, row[column]) : number}
          </StyledCell>
        );
      })}
    </tr>
  );
};
