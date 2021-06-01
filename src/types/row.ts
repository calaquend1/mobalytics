type CommonRowFields = {
  Champion: string;
  Role: keyof typeof RoleT;
  Games: number;
  WR: string;
  KDA: string;
  'GD@15': number;
  '#': string | number;
};

type ChampionsFields = {
  DPM: number;
  KP: string;
  'CS/M': number;
};

type MatchupFields = {
  'XPD@15': number;
  'CSD@15': number;
  'XP/M': string;
};

export type RowT = CommonRowFields & (ChampionsFields | MatchupFields);

enum RoleT {
  Mid = 'Mid',
  Bot = 'Bot',
  Adc = 'Adc',
  Top = 'Top',
  Sup = 'Sup',
}
