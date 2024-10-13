import { collection, fields } from "@keystatic/core";

export const tags = collection({
  label: "Tags",
  path: "src/content/tags/*",
  slugField: "value",
  format: { data: "json" },
  schema: {
    value: fields.slug({ name: { label: "Tag Name:" } }),
  },
})