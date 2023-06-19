"use client";

import { useState } from "react";

import Header from "../Header";
import MainIntro from "../MainIntro";
import { LinkContext } from "../Contexts";

const Layout = () => {
  const [activeLink, setActiveLink] = useState<string>("The blog");

  return (
    <LinkContext.Provider value={{ activeLink, setActiveLink }}>
      <>
        <Header />
        <MainIntro title={activeLink} />
      </>
    </LinkContext.Provider>
  );
};

export default Layout;
