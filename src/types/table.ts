import { RowT } from './row';

export type TableT = {
  rows: Array<RowT>;
  name: string;
  columns: Array<keyof RowT>;
};
