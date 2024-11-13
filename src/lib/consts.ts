import imageDefault from "../assets/images/news-placeholder.jpg";
export const SITE = {
  title: "Astro News",
  description: "A news site Created with Astro",
  origin: "https://astro-news.vercel.app",
  basePath: "/",
  location: "en-US",
  dir: "ltr",
  rss: "rss.xml",
  globalTags: [
    { path: "astro-news", name: "Astro News", icon: "#" },
    { path: "technology", name: "Technology", icon: "#" },
  ],
  defaultImage: imageDefault,
  defaultImageAlt: "Astro News",
};
