import { collection, fields } from "@keystatic/core";

export const authors = collection({
  label: "Authors",
  path: "src/content/authors/*/",
  slugField: "name",
  format: { data: "json" },
  schema: {
    name: fields.slug({ name: { label: "Name" } }),
    avatar: fields.object({
      src: fields.image({ label: "Avatar" }),
      alt: fields.text({ label: "Description of the image" }),
    }),
    links: fields.array(
      fields.object({
        label: fields.text({ label: "Label" }),
        url: fields.url({ label: "Link" }),
      }),
      {
        label: "Links",
        itemLabel: (props) => props.fields.label.value,
      }
    ),
  },
})