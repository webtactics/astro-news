import { collection, fields } from "@keystatic/core";

export const articles = collection({
  label: "Articles",
  slugField: "title",
  path: "src/content/articles/*",
  entryLayout: "content",
  format: { contentField: "content" },
  schema: {
    is_draft: fields.checkbox({
      label: "Is Draft?",
      defaultValue: false,
    }),

    is_in_news_ticker: fields.checkbox({
      label: "Is in News Ticker?",
      defaultValue: false,
    }),

    is_in_headline: fields.checkbox({
      label: "Is in Headline?",
      defaultValue: false,
    }),

    title: fields.slug({
      name: {
        label: "Title",
        description: "Keep the SEO title under 60 characters for best results.",
        validation: { isRequired: true },
      },
    }),

    description: fields.text({
      label: "Description",
      description:
        "Keep the SEO description under 160 characters for best results.",
      multiline: true,
      validation: { isRequired: true },
    }),

    cover_image: fields.image({
      label: "Cover Image",
      validation: { isRequired: true },
    }),

    cover_image_alt: fields.text({
      label: "Cover Image Alt Text",
      description: "Alt text for the cover image.",
      validation: { isRequired: true },
    }),

    published_time: fields.datetime({
      label: "Published Time",
      validation: { isRequired: true },
    }),

    authors: fields.array(
      fields.relationship({
        label: "Authors",
        collection: "authors",
        description: "Select list of authors",
      }),
      {
        label: "Authors",
        description: "Select list of authors",
        itemLabel: (props) => props.value ?? "",
        validation: {
          length: {
            min: 1,
          },
        },
      }
    ),

    category: fields.relationship({
      label: "Category",
      collection: "categories",
      description: "Select one category",
      validation: {
        isRequired: true,
      },
    }),

    tags: fields.array(
      fields.relationship({
        label: "Tags",
        collection: "tags",
      }),
      {
        label: "Tags",
        description: "Select list of tags (up to 5)",
        itemLabel: (props) => props.value ?? "",
        validation: {
          length: {
            min: 1,
            max: 5,
          },
        },
      }
    ),

    content: fields.mdx({ label: "Content" }),
  },
});
