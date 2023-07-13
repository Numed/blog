"use client";
import Link from "next/link";
import Image from "next/image";

import NewsletterContent from "@/src/components/NewsletterContent";
import { blogInfoContent, mainBlogs } from "@/src/components/Constants";
import CategoryButton from "@/src/ui/CategoryButton";
import { setColor } from "@/src/helpers";

const BlogInfo = () => {
  return (
    <>
      <section className="py-8 px-28 w-full flex justify-center items-start">
        <div className="w-1/3">
          <h4 className="font-semibold text-2xl mb-8">Recent blog posts</h4>
          {mainBlogs.map(
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
        <div className="w-2/3 ml-8">
          <p className="text-sm text-blogPurple mb-8">Sunday , 1 Jan 2023</p>
          <h4 className="font-bold text-4xl mb-8">
            Grid system for better Design User Interface
          </h4>
          <div>
            {blogInfoContent.map(
              ({ id, description, img, example, suptitle, title }) => (
                <div key={id}>
                  <h3 className="text-lg font-bold text-blogGrey mb-3">
                    {title}
                  </h3>
                  <p className="text-base mb-3">{description}</p>
                  <figure>
                    <Image
                      className="w-full h-full mb-3"
                      src={img}
                      alt={`blog-img-${id}`}
                    />
                    <figcaption className="mx-auto mb-3 text-center">
                      {suptitle}
                    </figcaption>
                  </figure>
                </div>
              )
            )}
            <h3 className="text-lg font-bold text-blogGrey mb-3">Conclusion</h3>
            <p className="text-base mb-6">
              Grids not only provide designers a structure on which to base
              layouts, but they also improve readability and scannability for
              end users. Use a good grid system that easily adapts to various
              screen sizes.
            </p>
          </div>
          <div className="space-x-2 mb-10">
            <CategoryButton color="Purple" text="Design" />
            <CategoryButton color="Pink" text="Interface" />
          </div>
        </div>
      </section>
      <NewsletterContent />
    </>
  );
};

export default BlogInfo;
