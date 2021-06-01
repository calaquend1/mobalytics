import { RowT } from '../../types/row';
import { StyledCell } from './styled'

export const Row = (props: { row: RowT; columns: Array<keyof RowT>; number: number }) => {
  const { row, columns = [], number } = props;
  return (
    <tr>
      {columns.map((parameter, i) => {
        return <StyledCell align={parameter === 'Champion' ? 'left' : 'center'} key={i}>{parameter !== '#' ? row[parameter] : number}</StyledCell>;
      })}
    </tr>
  );
};
