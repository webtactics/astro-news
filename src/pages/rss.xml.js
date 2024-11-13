import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@lib/consts";

export async function get(context) {
  const articles = await getCollection("articles");

  return await rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    trailingSlash: false,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.publishedAt,
      description: article.data.description,
      link: `/news/${article.slug}/`,
    })),
  });
}
