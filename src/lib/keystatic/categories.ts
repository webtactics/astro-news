import { collection, fields } from "@keystatic/core";

export const categories = collection({
  label: "Categories",
  path: "src/content/categories/*",
  slugField: "path",
  format: { data: "json" },
  schema: {
    name: fields.text({ label: "Category Name:" }),
    path: fields.slug({ name: { label: "Category Path:" } }),
  },
});
