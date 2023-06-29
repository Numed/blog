"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { setColor } from "@/src/helpers";
import CategoryButton from "@/src/ui/CategoryButton";
import { mainBlogs } from "../Constants";

const NewsletterContent = () => {
  const [recentBlogs, setRecentBlogs] = useState(mainBlogs.slice(0, 3));
  return (
    <div className="px-12 py-7">
      <h2 className="font-bold text-5xl tracking-tighter mb-6 w-full text-center">
        Stories and interviews
      </h2>
      <h3 className="mb-10 text-blogGrey text-xl text-center">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </h3>
      <div className="flex items-center justify-center">
        <input
          className="w-[330px] text-base text-blogGrey py-3 pr-4 pl-3.5 mr-4 rounded-lg bg-primary dark:bg-white"
          placeholder="Enter your email"
        />
        <button
          className="bg-blogPurple text-white text-base py-3 px-5 shadow rounded"
          type="button"
        >
          Subscribe
        </button>
      </div>
      <h4 className="mt-3 text-center text-sm text-blogGrey opacity-80">
        We care about your data in our{" "}
        <span className="underline opacity-100 cursor-pointer hover:text-white transition-colors">
          privacy policy
        </span>
      </h4>
      <section className="py-7 flex justify-center flex-col px-12">
        <h4 className="font-semibold text-2xl">All blog posts</h4>
        <div className="mt-8 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          {recentBlogs.map(
            ({
              id,
              img,
              date,
              description,
              author,
              categories,
              href,
              title,
            }) => (
              <Link key={id} href={href} className="grid gap-4 mb-8">
                <Image src={img} alt={title} />
                <div>
                  <h5 className="text-blogPurple text-sm font-semibold mb-3">
                    {author} &bull; {date}
                  </h5>
                  <h3 className="text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-base mb-6  text-blogGrey">{description}</p>
                  <div className="space-x-2">
                    {categories.map((el, i) => {
                      const color = setColor(el);
                      return <CategoryButton key={i} color={color} text={el} />;
                    })}
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsletterContent;
