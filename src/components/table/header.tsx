import { RowT } from '../../types/row';

export const TableHeader = (props: { columns: Array<keyof RowT> }) => {
  const { columns = [] } = props;
  return (
    <thead>
      <tr>
        {columns.map((parameter, i) => (
          <th key={i}>{parameter}</th>
        ))}
      </tr>
    </thead>
  );
};
