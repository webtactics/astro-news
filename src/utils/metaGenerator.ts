import type { ArticleMeta, Meta } from "@lib/types";
import type { CollectionEntry } from "astro:content";
import { SITE } from "@lib/consts";
import { tagsHandler } from "./handlers/tagsHandler";
import { authorsHandler } from "./handlers/authorsHandler";

type GetCollection = CollectionEntry<"pages"> | CollectionEntry<"articles">;

export const MetaGenerator = async (
  collection: GetCollection
): Promise<Meta | ArticleMeta> => {
  try {
    if (collection.collection === "articles") {
      const { remarkPluginFrontmatter } = await collection.render();
      const tags = await tagsHandler.getAllTags(collection);
      const authors = await authorsHandler.getAllAuthors(collection);

      return {
        title: collection.data.title,
        description: collection.data.description,
        tags: tags,
        publishedAt: collection.data.publishedAt,
        modifiedAt: remarkPluginFrontmatter.lastModified,
        authors: authors,
        section: collection.data.section,
        type: collection.data.type,
        image: collection.data.image.src,
        imageAlt: collection.data.imageAlt,
        noIndex: collection.data.noIndex,
        noFollow: collection.data.noFollow,
      };
    }

    if (collection.collection === "pages") {
      return {
        title: collection.data.title,
        description: collection.data.description,
        tags: SITE.globalTags,
        type: collection.data.type,
        image: SITE.defaultImage.src,
        imageAlt: SITE.defaultImageAlt,
        noIndex: collection.data.noIndex,
        noFollow: collection.data.noFollow,
      };
    }

    throw new Error("Invalid Collection");
  } catch (error) {
    console.error("Error generating metadata:", error);
    throw error;
  }
};
