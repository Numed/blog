"use client";

import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col space-y-3 mt-7 px-12 py-7 md:space-x-3 md:flex-row md:items-end">
      <span>&copy;2023</span>
      <Link href="#">Twitter</Link>
      <Link href="#">LinkedIn</Link>
      <Link href="#">Email</Link>
      <Link href="#">RSS feed</Link>
      <Link href="#">Add to Feedly</Link>
    </footer>
  );
};

export default Footer;
