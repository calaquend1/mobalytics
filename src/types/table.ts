import { Row } from './row';

export type Table = {
  rows: Array<Row>;
  name: string;
  parameters: Array<keyof Row>
};
