import { createContext } from "react";

type LinkType = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

export const LinkContext = createContext<LinkType>({
  activeLink: "",
  setActiveLink: () => {},
});
