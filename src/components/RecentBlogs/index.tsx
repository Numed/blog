import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { recentBlogs } from "../Constants";
import { setColor } from "@/src/helpers";

const RecentBlogs: FC = () => {
  return (
    <section className="py-7 flex justify-center flex-col px-12">
      <h4 className="font-semibold text-2xl">Recent blog posts</h4>
      <div className="cards">
        {recentBlogs.map(
          ({ id, img, date, description, author, categories, href, title }) => (
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
                    const elementStyles = `text-blog${color} bg-lightBlog${color} rounded-2xl py-1 px-3`;
                    return (
                      <button className={elementStyles} key={i}>
                        {el}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
};

export default RecentBlogs;
