import { Inter } from "next/font/google";

import "./globals.css";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Numed's blog`,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout />
        {children}
        <Footer />
      </body>
    </html>
  );
}
