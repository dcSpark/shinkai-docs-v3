import React from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import openapiIndex from "../../generated/openapi-index";

function formatSchema(schema) {
  if (!schema) {
    return "No schema specified";
  }

  if (schema.kind === "ref") {
    return schema.ref;
  }

  if (schema.kind === "array") {
    return `array<${formatSchema(schema.items)}>`;
  }

  if (schema.kind === "object") {
    return schema.properties?.length ? `object (${schema.properties.length} fields)` : "object";
  }

  if (schema.kind === "oneOf" || schema.kind === "anyOf" || schema.kind === "allOf") {
    return `${schema.kind} (${schema.variants.length})`;
  }

  if (schema.format) {
    return `${schema.kind} (${schema.format})`;
  }

  if (schema.enum?.length) {
    return `${schema.kind} enum`;
  }

  return schema.kind;
}

function SchemaProperties({ schema }) {
  if (!schema || schema.kind !== "object" || !schema.properties?.length) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {schema.properties.slice(0, 10).map((property) => (
        <span
          key={property.name}
          className="inline-flex items-center rounded-full border border-[rgba(18,18,18,0.08)] bg-black/[0.02] px-2.5 py-1 text-xs text-[#4d4646] dark:border-[rgba(255,255,255,0.08)] dark:bg-white/[0.04] dark:text-[#c9c1c1]"
        >
          {property.name}
          {property.required ? <span className="ml-1 text-[var(--ifm-color-primary)]">*</span> : null}
        </span>
      ))}
    </div>
  );
}

function ContentBlock({ title, items, emptyLabel }) {
  return (
    <section className="rounded-2xl border border-[rgba(18,18,18,0.08)] bg-white p-5 shadow-sm dark:border-[rgba(255,255,255,0.08)] dark:bg-white/[0.03]">
      <h3 className="m-0 text-base font-bold text-[#241f1f] dark:text-[#f3eded]">{title}</h3>
      {items?.length ? (
        <div className="mt-4 space-y-4">
          {items.map((item, index) => (
            <div
              key={`${item.contentType || item.status || item.name}-${index}`}
              className="rounded-xl border border-[rgba(18,18,18,0.08)] bg-[rgba(18,18,18,0.02)] p-4 dark:border-[rgba(255,255,255,0.08)] dark:bg-white/[0.04]"
            >
              {"status" in item ? (
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-[#241f1f] dark:text-[#f3eded]">
                    {item.status}
                  </span>
                  {item.description ? (
                    <span className="text-sm text-[#4d4646] dark:text-[#c9c1c1]">
                      {item.description}
                    </span>
                  ) : null}
                </div>
              ) : null}

              {"name" in item ? (
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-[#241f1f] dark:text-[#f3eded]">
                    {item.name}
                  </span>
                  <span className="text-xs uppercase tracking-[0.08em] text-[#8d8686]">
                    {item.in}
                  </span>
                </div>
              ) : null}

              {"contentType" in item ? (
                <div className="text-sm font-semibold text-[#241f1f] dark:text-[#f3eded]">
                  {item.contentType}
                </div>
              ) : null}

              <div className="mt-2 text-sm text-[#4d4646] dark:text-[#c9c1c1]">
                {formatSchema(item.schema)}
              </div>

              <SchemaProperties schema={item.schema} />

              {"content" in item && item.content?.length ? (
                <div className="mt-3 space-y-3">
                  {item.content.map((contentItem) => (
                    <div key={contentItem.contentType}>
                      <div className="text-sm font-semibold text-[#241f1f] dark:text-[#f3eded]">
                        {contentItem.contentType}
                      </div>
                      <div className="mt-1 text-sm text-[#4d4646] dark:text-[#c9c1c1]">
                        {formatSchema(contentItem.schema)}
                      </div>
                      <SchemaProperties schema={contentItem.schema} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-sm text-[#6f6a6a] dark:text-[#c9c1c1]">{emptyLabel}</p>
      )}
    </section>
  );
}

export default function ApiOperation() {
  const { frontMatter } = useDoc();
  const openapi = frontMatter.openapi;

  if (!openapi) {
    return null;
  }

  const operation = openapiIndex[String(openapi).toLowerCase()];
  if (!operation) {
    return null;
  }

  return (
    <section className="not-prose mt-8 space-y-6">
      <div className="rounded-2xl border border-[rgba(18,18,18,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,246,246,0.96))] p-5 shadow-[0_14px_40px_rgba(43,28,28,0.08)] dark:border-[rgba(255,255,255,0.08)] dark:bg-[linear-gradient(180deg,rgba(34,28,28,0.96),rgba(24,19,19,0.96))] dark:shadow-none">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex min-w-14 items-center justify-center rounded-full px-3 py-1 text-xs font-extrabold tracking-[0.08em] ${
              operation.method === "GET"
                ? "bg-[#dff5e6] text-[#2a8b48]"
                : "bg-[#e5eeff] text-[#3d6fe5]"
            }`}
          >
            {operation.method}
          </span>
          <code className="rounded-xl bg-black/[0.04] px-3 py-2 text-sm text-[#241f1f] dark:bg-white/[0.06] dark:text-[#f3eded]">
            {operation.path}
          </code>
        </div>
        {operation.operationId ? (
          <p className="mt-3 text-sm text-[#6f6a6a] dark:text-[#c9c1c1]">
            Operation ID: <code>{operation.operationId}</code>
          </p>
        ) : null}
      </div>

      {operation.parameters?.length ? (
        <ContentBlock
          title="Parameters"
          items={operation.parameters}
          emptyLabel="No parameters for this endpoint."
        />
      ) : null}

      <ContentBlock
        title="Request Body"
        items={operation.requestBody?.content}
        emptyLabel="No request body for this endpoint."
      />

      <ContentBlock
        title="Responses"
        items={operation.responses}
        emptyLabel="No responses documented for this endpoint."
      />
    </section>
  );
}
