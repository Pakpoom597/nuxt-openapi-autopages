import { readFileSync } from "fs";
import { join } from "path";
import { parse } from "yaml";
import SwaggerParser from "@apidevtools/swagger-parser";
import { getRouterParam } from "h3";
export default defineEventHandler(async (event) => {
  const domainName = getRouterParam(event, "domainName");
  const filePath = join(
    process.cwd(),
    `assets/openapi/example/${domainName}.yaml`,
  );
  const rawYaml = readFileSync(filePath, "utf8");
  const openApiDoc = parse(rawYaml);
  const dereferenced = await SwaggerParser.dereference(openApiDoc);
  return {
    data: dereferenced,
  };
});
