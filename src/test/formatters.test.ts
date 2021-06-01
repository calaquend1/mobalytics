import { formatter } from '../components/format';

describe('formatter champion check', () => {
  test('should return empty string and cut big strings', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('Champion', '')).toHaveLength(0);
    expect(formatter('Champion', 'sdasdsadasdsadasdsadaaSAåsda')).toHaveLength(19);
    expect(formatter('Champion', undefined as any)).toEqual('');
    expect(formatter('Champion', null as any)).toEqual('');
  });
});

describe('formatter kda check', () => {
  test('kda should cut fractions', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('KDA', '7.28 / 7.44 / 8.22')).toEqual('7.3 / 7.4 / 8.2');
    expect(formatter('KDA', '1231231')).toEqual('1231231.0 / 0.0 / 0.0');
    expect(formatter('KDA', undefined as any)).toEqual('');
    expect(formatter('KDA', null as any)).toEqual('');
  });
});

describe('role cut', () => {
  test('should cut roles', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('Role', 'Middle')).toHaveLength(3);
    expect(formatter('Role', 'Middle')).toEqual('Mid');
    expect(formatter('Role', 'Bottom')).toHaveLength(3);
    expect(formatter('Role', 'Asdasdasd')).toHaveLength(3);
    expect(formatter('Role', 'Support')).toHaveLength(3);
    expect(formatter('Role', undefined as any)).toEqual('');
    expect(formatter('Role', null as any)).toEqual('');
  });
});

describe('wr && kp check', () => {
  test('should be with %', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('WR', '20%')).toHaveLength(5);
    expect(formatter('WR', '20%')).toEqual('20.0%');
    expect(formatter('KP', '20.2562%')).toHaveLength(5);
    expect(formatter('KP', '20.2562%')).toEqual('20.3%');
    expect(formatter('KP', undefined as any)).toEqual('');
    expect(formatter('KP', null as any)).toEqual('');
  });
});

describe('xpm', () => {
  test('xpm test', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('XP/M', '35,353535')).toHaveLength(6);
    expect(formatter('XP/M', '35,3')).toEqual('35,3');
    expect(formatter('XP/M', null as any)).toEqual('');
    expect(formatter('XP/M', undefined as any)).toEqual('');
  });
});

describe('games', () => {
  test('games test', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('Games', 35)).toEqual(35);
    expect(formatter('Games', 22)).toEqual(22);
    expect(formatter('Games', 35)).toBe(35);
    expect(formatter('Games', undefined as any)).toBe('');
    expect(formatter('Games', null as any)).toBe('');
  });
});
