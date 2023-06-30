import Link from "next/link";
import Image from "next/image";

import { projectsBlogs } from "../Constants";
import CategoryButton from "@/src/ui/CategoryButton";
import { setColor } from "@/src/helpers";

const ProjectsContent = () => {
  return (
    <section className="py-7 flex justify-center flex-col mx-12">
      <h4 className="font-semibold text-2xl">List project</h4>
      <div className="cards">
        {projectsBlogs.map(
          ({ id, img, size, description, categories, href, title }) => (
            <div
              key={id}
              className={
                size === "big"
                  ? "col-span-2 grid gap-4 mb-8"
                  : "grid gap-4 mb-8"
              }
            >
              <Image className="w-full h-full" src={img} alt={title} />
              <div>
                <Link href={href} className="text-2xl font-bold mb-3 w-5/6">
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

export default ProjectsContent;
