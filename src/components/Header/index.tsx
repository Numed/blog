"use client";

import { FC, useContext, useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineSun } from "react-icons/hi";
import { FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

import { navLinks } from "../Constants";
import { LinkContext } from "../Contexts";

const Header: FC = () => {
  const [switched, setSwitched] = useState<boolean>(true);

  const { setActiveLink } = useContext(LinkContext);
  const router = useRouter();
  const links = useRef(Array(navLinks.length).fill(null));
  const { theme, setTheme } = useTheme();

  const onClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    banner: string
  ) => {
    e.preventDefault();
    setActiveLink(banner);
    router.push(href);
    links.current.forEach((el) =>
      el.classList.contains("underline")
        ? el.classList.remove("underline")
        : null
    );
    const activeLink = links.current.filter((el) => el === e.target)[0];
    activeLink.classList.add("underline", "underline-offset-6");
  };

  const onChangeTheme = () => {
    setSwitched(!switched),
      theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <header className="w-full py-12 px-16 flex justify-between">
      <h3 className="font-semibold text-xl leading-6">Numed</h3>
      <ul className="flex space-x-4 items-center">
        {navLinks.map(({ id, href, title, banner }) => (
          <li key={id}>
            <a
              ref={(el) => (links.current[id] = el)}
              className="text-xl leading-6 cursor-pointer opacity-90 hover:opacity-100 hover:underline"
              onClick={(e) => onClick(e, href, banner)}
            >
              {title}
            </a>
          </li>
        ))}
        <label className="flex items-center relative w-max cursor-pointer select-none -z-3">
          <input
            type="checkbox"
            checked={switched}
            onChange={() => onChangeTheme()}
            className="toggle-input py-5 px-12 appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none bg-primary dark:bg-white"
          />
          <span className="absolute font-medium text-xl left-4 text-white dark:text-primary">
            <HiOutlineSun />
          </span>
          <span className="absolute font-medium text-xl right-4 text-white dark:text-primary">
            <FiMoon />
          </span>
          <span className="toggle-circle w-5 h-5 right-4 absolute rounded-full transform transition-transform  pointer-events-none bg-white dark:bg-bodyBlue" />
        </label>
      </ul>
    </header>
  );
};

export default Header;
