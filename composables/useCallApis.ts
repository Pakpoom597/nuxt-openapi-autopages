export interface IUseCallApis {
  method: TMethod;
  url: string;
  path: string;
  query?: Record<string, any>;
  body?: any;
}

export default (payload: IUseCallApis) => {
  const { method, url, path, query, body } = payload;

  return useFetch<any[]>(`${url}${path}`, {
    method,
    query,
    body,
  });
};
