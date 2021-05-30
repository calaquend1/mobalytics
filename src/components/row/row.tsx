import { RowT } from '../../types/row';

export const Row = (props: { row: RowT; parameters: Array<keyof RowT>; number: number }) => {
  const { row, parameters = [], number } = props;
  return (
    <tr>
      {parameters.map((parameter, i) => {
        return <td key={i}>{parameter !== '#' ? row[parameter] : number}</td>;
      })}
    </tr>
  );
};
