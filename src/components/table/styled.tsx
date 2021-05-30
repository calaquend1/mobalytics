import styled from '@emotion/styled';

export const StyledTable = styled.table`
  margin: 0% auto;
  background-color: #cfe2f3;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    width: auto;
    padding: 0.5em;
    text-align: center;
    font-weight: normal;
  }
  td:nth-of-type(2) {
    text-align: left;
  }
`;

export const TableContainer = styled.div`
  margin-bottom: 40px;
`;
