import type { HTMLAttributes } from "astro/types";

export type Link = {
  label: string;
  href: string;
};

export type Svg = HTMLAttributes<"svg"> & {
  height?: number;
  width?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
};

export type Author = {
  name: string;
  slug: string;
  avatar: string;
  links?: Link[];
};

type tag = {
	name: string;
	path: string;
};

export type Meta = {
	// General metadata

	/** C'est mieux que le titre être maximum 50 caractères. */
	title: string;

	/** C'est mieux que la description de l'article maximum 160 caractères. */
	description: string;

	tags: tag[];

	// Article metadata
	published_at?: string | Date;
	modified_at?: string;
	article_author?: string;
	article_section?: string;

	// OpenGraph metadata
	og_image?: string;
	og_image_alt?: string;
	og_type?: "article" | "website";

	// Robots Metadata
	no_follow?: boolean;
	no_index?: boolean;
};