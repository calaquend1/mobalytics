import React from 'react';
import { TableT } from '../../types/table';
import {RowT} from '../../types/row'

export const Table = (props: TableT) => {
  const { name, parameters = [] } = props;
  return (
    <div>
      <h1>{name}</h1>
      <table>
        <TableHeader parameters={parameters} />
      </table>
      <div>
        
      </div>
    </div>
  );
};

const TableHeader = (props: {parameters: Array<keyof RowT>}) => {
  const {parameters = []} = props
  return (<thead>
    <tr>
      {parameters.map((parameter) => (
        <th>{parameter}</th>
      ))}
    </tr>
    
  </thead>)
}