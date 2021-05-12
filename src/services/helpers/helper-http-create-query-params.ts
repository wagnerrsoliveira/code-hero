export type TParamsObject = {
  [key: string]: string;
};

export function createHttpQueryParams(paramsObject: TParamsObject) {
  const keysObject = Object.keys(paramsObject);
  let queryParams = '';
  for (let index = 0; index < keysObject.length; index++) {
    const key = keysObject[index];
    const value = paramsObject[key];
    const firstChar = index === 0 ? '?' : '&';
    queryParams += `${firstChar}${key}=${value}`;
  }
  return queryParams;
}
