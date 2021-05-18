import {createHttpQueryParams} from '../../../src/services/helpers/helper-http-create-query-params';

describe('helper-http-create-query-params', () => {
  test('should return empty string when pass object empty', () => {
    const emptyObject = {};
    const result = createHttpQueryParams(emptyObject);
    expect(result).toBe('');
  });

  test('should return only params that have a value', () => {
    const emptyObject = {name: 'any_name', age: 38, gender: ''};
    const result = createHttpQueryParams(emptyObject);
    expect(result).toBe('?name=any_name&age=38');
  });

  test('should return all params that have a value', () => {
    const emptyObject = {name: 'any_name', age: 0, gender: 'M'};
    const result = createHttpQueryParams(emptyObject);
    expect(result).toBe('?name=any_name&age=0&gender=M');
  });

  test('should return boolean params that have a value false', () => {
    const emptyObject = {isOk: false};
    const result = createHttpQueryParams(emptyObject);
    expect(result).toBe('?isOk=false');
  });

  test('should return number params that have a value 0', () => {
    const emptyObject = {age: 0};
    const result = createHttpQueryParams(emptyObject);
    expect(result).toBe('?age=0');
  });
});
