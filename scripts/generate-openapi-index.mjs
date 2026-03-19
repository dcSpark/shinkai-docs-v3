import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const HTTP_METHODS = new Set(["get", "post", "put", "patch", "delete"]);

function refName(ref) {
  if (!ref) {
    return null;
  }

  const parts = String(ref).split("/");
  return parts[parts.length - 1] || ref;
}

function summarizeSchema(schema) {
  if (!schema) {
    return null;
  }

  if (schema.$ref) {
    return {
      kind: "ref",
      ref: refName(schema.$ref),
    };
  }

  if (schema.oneOf) {
    return {
      kind: "oneOf",
      variants: schema.oneOf.map(summarizeSchema).filter(Boolean),
    };
  }

  if (schema.anyOf) {
    return {
      kind: "anyOf",
      variants: schema.anyOf.map(summarizeSchema).filter(Boolean),
    };
  }

  if (schema.allOf) {
    return {
      kind: "allOf",
      variants: schema.allOf.map(summarizeSchema).filter(Boolean),
    };
  }

  if (schema.type === "array") {
    return {
      kind: "array",
      items: summarizeSchema(schema.items),
    };
  }

  if (schema.type === "object" || schema.properties) {
    const properties = Object.entries(schema.properties || {}).map(([name, value]) => ({
      name,
      schema: summarizeSchema(value),
      required: Array.isArray(schema.required) ? schema.required.includes(name) : false,
    }));

    return {
      kind: "object",
      properties,
      additionalProperties:
        typeof schema.additionalProperties === "object"
          ? summarizeSchema(schema.additionalProperties)
          : schema.additionalProperties || false,
    };
  }

  return {
    kind: schema.type || "schema",
    format: schema.format || null,
    enum: schema.enum || null,
  };
}

function summarizeContent(content) {
  return Object.entries(content || {}).map(([contentType, value]) => ({
    contentType,
    schema: summarizeSchema(value?.schema),
  }));
}

function summarizeParameters(parameters) {
  return (parameters || []).map((parameter) => ({
    name: parameter.name,
    in: parameter.in,
    required: Boolean(parameter.required),
    schema: summarizeSchema(parameter.schema),
  }));
}

const rootDir = process.cwd();
const yamlsDir = path.join(rootDir, "api-reference", "yamls");
const outFile = path.join(rootDir, "src", "generated", "openapi-index.js");

const openapiIndex = {};

for (const entry of fs.readdirSync(yamlsDir)) {
  if (!entry.endsWith(".yaml") && !entry.endsWith(".yml")) {
    continue;
  }

  const filePath = path.join(yamlsDir, entry);
  const parsed = yaml.load(fs.readFileSync(filePath, "utf8"));

  for (const [routePath, routeConfig] of Object.entries(parsed?.paths || {})) {
    for (const [method, operation] of Object.entries(routeConfig || {})) {
      if (!HTTP_METHODS.has(method)) {
        continue;
      }

      const key = `${method} ${routePath}`;
      openapiIndex[key] = {
        method: method.toUpperCase(),
        path: routePath,
        operationId: operation.operationId || null,
        requestBody: operation.requestBody
          ? {
              required: Boolean(operation.requestBody.required),
              content: summarizeContent(operation.requestBody.content),
            }
          : null,
        parameters: summarizeParameters(operation.parameters),
        responses: Object.entries(operation.responses || {}).map(([status, response]) => ({
          status,
          description: response.description || null,
          content: summarizeContent(response.content),
        })),
      };
    }
  }
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(
  outFile,
  `const openapiIndex = ${JSON.stringify(openapiIndex, null, 2)};\n\nexport default openapiIndex;\n`,
);
