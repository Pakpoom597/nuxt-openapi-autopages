import { readFileSync } from "fs";
import { join } from "path";
import { parse } from "yaml";
import SwaggerParser from "@apidevtools/swagger-parser";
export default defineEventHandler(async (event) => {
  const { domainName } = event.context.params;
  const filePath = join(
    process.cwd(),
    `assets/openapi/example/${domainName}.yaml`,
  );
  const rawYaml = readFileSync(filePath, "utf8");
  const openApiDoc = parse(rawYaml);
  const dereferenced = await SwaggerParser.dereference(openApiDoc);
  return {
    message: `Hello from Nuxt 3 API! ${domainName} ${JSON.stringify(dereferenced)}`,
  };
});
