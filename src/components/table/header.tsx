import { RowT } from '../../types/row';

export const TableHeader = (props: { parameters: Array<keyof RowT> }) => {
  const { parameters = [] } = props;
  return (
    <thead>
      <tr>
        {parameters.map((parameter, i) => (
          <th key={i}>{parameter}</th>
        ))}
      </tr>
    </thead>
  );
};
