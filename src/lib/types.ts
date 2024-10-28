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