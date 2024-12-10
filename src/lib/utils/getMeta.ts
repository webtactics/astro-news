import { render, type CollectionEntry } from "astro:content";
import { authorsHandler } from "../handlers/authors";
import { Site } from "../constants/config";
import defaultImage from "~/assets/images/default-image.jpg";
import type { ArticleMeta, Meta } from "../types";
import { capitalizeFirstLetter } from "./letter";

type getMeta = CollectionEntry<"articles" | "views">;

export const getMeta = async (collection: getMeta): Promise<Meta | ArticleMeta> => {
  try {
    
    if (collection.collection === "articles") {
      const { remarkPluginFrontmatter } = await render(collection);
      const authors = authorsHandler.getAuthors(collection.data.authors);

      return {
        title: `${capitalizeFirstLetter(collection.data.title)} - ${Site.title}`,
        metaTitle: capitalizeFirstLetter(collection.data.title),
        description: collection.data.description,
        ogImage: collection.data.cover.src,
        ogImageAlt: collection.data.covert_alt
          ? collection.data.covert_alt
          : collection.data.title,
        publishedTime: collection.data.publishedTime,
        lastModified: remarkPluginFrontmatter.lastModified,
        authors: authors.map((author) => ({
          name: author.data.name,
          link: `${author.id}`,
        })),
        type: "article",
      };
    }

    if (collection.collection === "views") {
      return {
        title: `${capitalizeFirstLetter(collection.data.title)} - ${Site.title}`,
        metaTitle: capitalizeFirstLetter(collection.data.title),
        description: collection.data.description,
        ogImage: defaultImage.src,
        ogImageAlt: Site.title,
        type: "website",
      };
    }

    throw new Error("Invalid collection");

  }
  catch (error) {
    console.error("Error generating metadata:", error);
    throw error;
  }
};
