import { collection, fields } from "@keystatic/core";

export const authors = collection({
  label: "Authors",
  path: "src/content/authors/*",
  slugField: "name",
  format: { data: "json" },
  schema: {
    name: fields.slug({ name: { label: "Name" } }),
    avatar: fields.image({
      label: "Avatar",
      validation: { isRequired: true },
    }),
    links: fields.array(
      fields.object({
        title: fields.text({ label: "Label" }),
        href: fields.url({ label: "Link" }),
      }),
      {
        label: "Links",
        itemLabel: (props) => props.fields.title.value,
      }
    ),
  },
});
