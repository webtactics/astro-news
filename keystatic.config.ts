import { config } from "@keystatic/core";
import { authors, categories, news, tags } from "@utils/keystatic";


export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: {name: "Astro News"},
    navigation: ['---', 'news', '---', "authors", "categories" , "tags"],
  },
  collections: {
    news,
    tags,
    authors,
    categories
  }
})