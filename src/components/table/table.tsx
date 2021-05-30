import { TableT } from '../../types/table';
import { StyledTable, TableContainer } from './styled';
import { TableHeader } from './header';
import { Row } from '../row';

export const Table = (props: TableT) => {
  const { name, parameters = [], rows = [] } = props;
  return (
    <TableContainer>
      <h1>{name}</h1>
      <StyledTable>
        <TableHeader parameters={parameters} />
        <tbody>
          {rows.map((row, i) => (
            <Row key={i} parameters={parameters} row={row} number={i + 1} />
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};
