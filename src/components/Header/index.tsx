import { FC, useContext, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

import { navLinks } from "../Constants";
import { LinkContext } from "../Contexts";

import { HiOutlineSun } from "react-icons/hi";
import { FiMoon } from "react-icons/fi";

const Header: FC = () => {
  const { setActiveLink } = useContext(LinkContext);
  const router = useRouter();
  const pathname = usePathname();
  const links = useRef(Array(navLinks.length).fill(null));

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

  useEffect(() => {
    const activePage = navLinks.filter((el) => el.href === pathname)[0];
    setActiveLink(activePage.banner);
    const activeLink = links.current.filter(
      (el) => el.textContent === activePage.title
    )[0];
    activeLink.classList.add("underline", "underline-offset-6");
  }, []);

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
        <label className="flex items-center relative w-max cursor-pointer select-non">
          <input
            type="checkbox"
            className="py-5 px-12 appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none bg-white dark:bg-white"
          />
          <span className="absolute font-medium text-xl left-4 text-primary">
            <FiMoon />
          </span>
          <span className="absolute font-medium text-xl right-4 text-primary">
            <HiOutlineSun />
          </span>
          <span className="w-5 h-5 right-4 absolute rounded-full transform transition-transform bg-bodyBlue" />
        </label>
      </ul>
    </header>
  );
};

export default Header;
