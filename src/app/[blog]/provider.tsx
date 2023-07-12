"use client";

import { ThemeProvider } from "next-themes";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;
