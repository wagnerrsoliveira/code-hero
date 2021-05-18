import {isEmptyString} from '../../utils/String';

export type TParamsObject = {
  [key: string]: string;
};

export function createHttpQueryParams<T>(paramsObject: T) {
  const queryParams = Object.entries(paramsObject)
    .filter((attr) => attr.every((value) => !isEmptyString(value)))
    .map((attr) => attr.join('='))
    .join('&');

  return queryParams ? `?${queryParams}` : '';
}
