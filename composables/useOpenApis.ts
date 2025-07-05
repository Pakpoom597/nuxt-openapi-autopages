import type { OpenAPI } from "openapi-types";
interface openApiDoc {
  data: OpenAPI.Document & {
    servers: {
      url: string;
      description: string;
    }[];
  };
}

export default (domainName: string) => {
  return useFetch<openApiDoc>(`/api/openapi/${domainName}`);
};
