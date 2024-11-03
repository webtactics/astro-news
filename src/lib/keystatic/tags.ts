import { collection, fields } from "@keystatic/core";

export const tags = collection({
  label: "Tags",
  path: "src/content/tags/*",
  slugField: "path",
  format: { data: "json" },
  schema: {
    name: fields.text({ label: "Tag Name:" }),
    path: fields.slug({ name: { label: "Tag Path:" } }),
  },
});
