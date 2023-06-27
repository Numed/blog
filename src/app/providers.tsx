"use client";

import { ThemeProvider } from "next-themes";
import Layout from "@/src/components/Layout";
import Footer from "@/src/components/Footer";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;
