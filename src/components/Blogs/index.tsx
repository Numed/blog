import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import CategoryButton from "@/src/ui/CategoryButton";
import { mainBlogs } from "@/src/components/Constants";
import { setColor } from "@/src/helpers";

const Blogs: FC = () => {
  return (
    <section className="py-7 flex justify-center flex-col px-12">
      <h4 className="font-semibold text-2xl">All blog posts</h4>
      <div className="mt-8 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {mainBlogs.map(
          ({ id, img, date, description, author, categories, href, title }) => (
            <div key={id} className="grid gap-4 mb-8">
              <Image className="w-full h-full" src={img} alt={title} />
              <div>
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

export default Blogs;
