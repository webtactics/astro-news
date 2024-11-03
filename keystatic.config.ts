import { config } from "@keystatic/core";
import { authors, categories, tags, articles } from "@lib/keystatic";

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: "Astro News" },
    navigation: ["---", "articles", "---", "authors", "categories", "tags"],
  },
  collections: {
    articles,
    tags,
    authors,
    categories,
  },
});
