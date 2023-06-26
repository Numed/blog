"use client";

const MainIntro = ({ title }: { title: string }) => {
  return (
    <section className="border-t-2 border-b-2">
      <h2 className="my-4 text-4xl md:text-8xl font-bold uppercase lg:text-10xl text-center px-8">
        {title}
      </h2>
    </section>
  );
};

export default MainIntro;
