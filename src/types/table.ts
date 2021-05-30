import { RowT } from './row';

export type TableT = {
  rows: Array<RowT>;
  name: string;
  parameters: Array<keyof RowT>;
};
