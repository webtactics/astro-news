import placeholder from "@assets/images/news-placeholder.jpg";
import type { Link } from "./types";

export const SITE = {
  title: "Astro News",
  description: "A news website built with Astro",
  lang: "en-us",
  dir: "ltr",
  placeholder_image: placeholder,
}

export const CategoriesLinks: Link[] = [
  { label: 'Business', href: '/business' },
  { label: 'Environment', href: '/environment' },
  { label: 'Finance', href: '/finance' },
  { label: 'Health', href: '/health' },
  { label: 'Lifestyle', href: '/lifestyle' },
  { label: 'Technology', href: '/technology' },
]

export const PagesLinks: Link[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Press', href: '/press' },
]

export const LegalsLinks: Link[] = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
]