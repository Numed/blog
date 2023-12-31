import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import CategoryButton from "@/src/ui/CategoryButton";

import { recentBlogs } from "../Constants";
import { setColor } from "@/src/helpers";

const RecentBlogs: FC = () => {
  return (
    <section className="py-7 flex justify-center flex-col mx-12">
      <h4 className="font-semibold text-2xl">Recent blog posts</h4>
      <div className="cards">
        {recentBlogs.map(
          ({
            id,
            img,
            date,
            size,
            description,
            author,
            categories,
            href,
            title,
          }) => (
            <div
              key={id}
              className={
                size === "big"
                  ? "col-span-2 grid gap-4 my-8 grid-flow-col"
                  : "grid gap-4 mb-8"
              }
            >
              <Image className="w-full h-full" src={img} alt={title} />
              <div
                className={size === "big" ? "flex flex-col justify-evenly" : ""}
              >
                <h5 className="text-blogPurple text-sm font-semibold mb-3">
                  {author} &bull; {date}
                </h5>
                <Link href={href} className="text-2xl font-bold mb-3">
                  {title}
                </Link>
                <p className="text-base mb-6 mt-4 text-blogGrey">
                  {description}
                </p>
                <div className="space-x-2">
                  {categories.map((el, i) => {
                    const color = setColor(el);
                    return <CategoryButton key={i} color={color} text={el} />;
                  })}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default RecentBlogs;
