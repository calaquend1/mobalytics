import { RowT } from '../../types/row';

export const TableHeader = (props: { columns: Array<keyof RowT> }) => {
  const { columns = [] } = props;
  return (
    <thead>
      <tr>
        {columns.map((columnName, i) => (
          <th key={i}>{columnName}</th>
        ))}
      </tr>
    </thead>
  );
};
