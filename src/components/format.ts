export const formatter = (columnName: string, value: string | number = '') => {
  const columnValue = value.toString();
  if (columnName === 'Role') {
    return columnValue.slice(0, 3);
  }
  if (columnName === 'Champion') {
    // ' vs nunu & willump'.length = 18
    return columnValue.slice(0, 19);
  }
  if (['WR', 'KP'].includes(columnName)) {
    const isCorrectPercent = columnValue[columnValue.length - 1] === '%';
    if (!isCorrectPercent) return '-';
    const [integer, fractional = '0'] = columnValue.split('.');
    const intValue = integer.replace(/\D/g, '');
    const fractValue = fractional.slice(0, fractional.length - 1) || 0;
    const output = Number(`${intValue}.${fractValue}`).toFixed(1);
    return `${output}%`;
  }
  if (columnName === 'XP/M') {
    const [integer, fractional] = columnValue.split(',');
    return `${integer},${fractional.slice(0, 3)}`;
  }
  if (columnName === 'KDA') {
    const [k = 0, d = 0, a = 0] = columnValue.split(' / ');
    return `${Number(k).toFixed(1)} / ${Number(d).toFixed(1)} / ${Number(a).toFixed(1)}`;
  }

  if (['Games', 'CS/M', 'DPM', 'CSD@15', 'GD@15', 'XPD@15'].includes(columnName)) {
    return Number(columnValue) || '';
  }
  return columnValue;
};
