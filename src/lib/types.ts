import type { ImageFunction } from "astro:content";

export type Link = {
  label: string;
  path: string;
};

export type Tag = {
  name: string;
  icon: ImageFunction | string;
  path: string;
};

export type Author = {
  name: string;
  path: string;
};

export type Meta = {
  // Global Metadata
  title: string;
  description: string;
  type: "article" | "website";
  tags: Tag[];

  // Open Graph Metadata
  image: string;
  imageAlt: string;

  // Robots Metadata
  noIndex: boolean;
  noFollow: boolean;
};

export type ArticleMeta = Meta & {
  // Article Metadata
  publishedAt: string | Date;
  modifiedAt: string | Date;
  authors: Author[];
  section: string;
};
