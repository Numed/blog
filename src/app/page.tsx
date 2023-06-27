"use client";

import RecentBlogs from "@/src/components/RecentBlogs";
import Blogs from "@/src/components/Blogs";
import Pagination from "@/src/components/Pagination";

const Home = () => {
  return (
    <>
      <RecentBlogs />
      <Blogs />
      <Pagination />
    </>
  );
};

export default Home;
