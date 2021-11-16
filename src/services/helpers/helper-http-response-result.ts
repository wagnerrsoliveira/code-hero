export async function createHttpQueryParams<T>(response: Response): Promise<T> {
  return result<T>(response).;
}

function result<T>(response: Response): Promise<Result<T>> {
  return {
    200: {
      data: dataResult<T>(response.json()),
    },
  };
}

type Result<T> = {
  [key: number]: {
    data: T;
  };
};

async function dataResult<T>(data: Promise<T>) {
  return data;
}
