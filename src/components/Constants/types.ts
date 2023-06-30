import { StaticImageData } from "next/image";

export type NavlinkType = {
  id: number;
  title: string;
  href: string;
  banner: string;
};

export type RecentBlogsType = {
  id: number;
  size?: string;
  img: string | StaticImageData;
  title: string;
  description: string;
  href: string;
  categories: string[];
  author: string;
  date: string;
};

export type ProjectsType = {
  id: number;
  size?: string;
  img: string | StaticImageData;
  title: string;
  description: string;
  href: string;
  categories: string[];
};
