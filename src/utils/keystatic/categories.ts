import { collection, fields } from "@keystatic/core";

export const categories = collection({
  label: "Categories",
  path: "src/content/categories/*",
  slugField: "value",
  format: { data: "json" },
  schema: {
    value: fields.slug({ name: { label: "Category Name:" } }),
  },
})