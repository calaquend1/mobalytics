import { formatter } from '../components/format';

describe('formatter champion check', () => {
  test('should return empty string and cut big strings', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('Champion', '')).toHaveLength(0);
    expect(formatter('Champion', 'sdasdsadasdsadasdsadaaSAåsda')).toHaveLength(19);
  });
});

describe('formatter kda check', () => {
  test('kda should cut fractions', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('KDA', '7.28 / 7.44 / 8.22')).toEqual('7.3 / 7.4 / 8.2');
    expect(formatter('KDA', '1231231')).toEqual('1231231.0 / 0.0 / 0.0');
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
  });
});

describe('wr && kp check', () => {
  test('should be with %', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('WR', '20%')).toHaveLength(5);
    expect(formatter('WR', '20%')).toEqual('20.0%');
    expect(formatter('KP', '20.2562%')).toHaveLength(5);
    expect(formatter('KP', '20.2562%')).toEqual('20.3%');
  });
});

describe('xpm', () => {
  test('xpm test', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('XP/M', '35,353535')).toHaveLength(6);
    expect(formatter('XP/M', '35,3')).toEqual('35,3');
  });
});

describe('games', () => {
  test('games test', () => {
    expect(formatter).toBeInstanceOf(Function);
    expect(formatter('Games', 35)).toEqual(35);
    expect(formatter('Games', 22)).toEqual(22);
    expect(formatter('Games', 35)).toBe(35);
  });
});
