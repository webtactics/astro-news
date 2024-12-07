import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {Site} from "../lib/constants/config"

export async function GET(context) {
  const articles = await getCollection('articles');
  return rss({
    title: Site.title,
    description: Site.description,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.publishedTime,
      description: article.data.description,
      link: `/articles/${article.id}/`,
    })),
  });
}