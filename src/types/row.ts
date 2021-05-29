export type Row = {
  "#": string | number;
  Champion: string;
  Role: Role;
  Games: number;
  WR: string;
  KDA: string;
  "GD@15": number;
  "CS/M"?: number;
  DPM?: number;
  KP?: string;
  "XPD@15"?: number;
  "CSD@15"?: number;
  "XP/M"?: number;
};

export type Role = 'Mid' | 'Bot' | 'Adc' | 'Sup' | 'Top'
