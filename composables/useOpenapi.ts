import type { OpenAPI } from "openapi-types";
interface openApiDoc {
  data: OpenAPI.Document;
}

export default (domainName: string) => {
  return useFetch<openApiDoc>(`/api/openapi/${domainName}`);
};
