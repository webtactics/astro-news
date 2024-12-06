import type { Link } from "../types"

export const Site = {
  title: "Astro News",
  description: "A news website built with Astro",
  author: "Mohammad Rahmani",
  url: "https://astro-news-six.vercel.app",
  github: "https://github.com/Mrahmani71/astro-news",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 2,
}

export const Navigation: Link[] = [
  {
    href: "technology",
    text: "Technology",
  },
  {
    href: "programming",
    text: "Programming",
  },
  {
    href: "lifestyle",
    text: "Lifestyle",
  },
  {
    href: "productivity",
    text: "Productivity",
  },
  {
    href: "health",
    text: "Health",
  },
  {
    href: "finance",
    text: "Finance",
  }
]

export const otherLinks: Link[] = [
  {
    href: "/about",
    text: "About us",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  }, {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },
  {
    href: "/rss", // TODO: add rss
    text: "RSS",
  },
  {
    href: "/sitemap", // TODO: add sitemap
    text: "Sitemap",
  }
]

export const Social: Link[] = [
  {
    href: "https://github.com/test",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me/test",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com/test",
    text: "Twitter",
    icon: "newTwitter",
  }, {
    href: "https://www.facebook.com/test",
    text: "Facebook",
    icon: "facebook",
  }
]