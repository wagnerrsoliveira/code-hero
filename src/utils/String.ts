export const isEmptyString = <T>(value: T) => {
  return ['null', 'undefined', ''].includes(String(value));
};
