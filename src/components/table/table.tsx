import { TableT } from '../../types/table';
import { StyledTable, TableContainer } from './styled';
import { TableHeader } from './header';
import { Row } from '../row';

export const Table = (props: TableT) => {
  const { name, columns = [], rows = [] } = props;
  return (
    <TableContainer>
      <h1>{name}</h1>
      <StyledTable>
        <TableHeader columns={columns} />
        <tbody>
          {rows.map((row, i) => (
            <Row key={i} columns={columns} row={row} number={i + 1} />
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};
