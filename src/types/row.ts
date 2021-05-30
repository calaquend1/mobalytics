export type RowT = {
  Champion: string;
  Role: keyof typeof RoleT;
  Games: number;
  WR: string;
  KDA: string;
  'GD@15': number;
  'CS/M'?: number;
  DPM?: number;
  KP?: string;
  'XPD@15'?: number;
  'CSD@15'?: number;
  'XP/M'?: string;
  '#'?: string | number;
};

enum RoleT {
  Mid = 'Mid',
  Bot = 'Bot',
  Adc = 'Adc',
  Top = 'Top',
  Sup = 'Sup',
}
