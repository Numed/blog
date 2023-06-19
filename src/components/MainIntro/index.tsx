"use client";

const MainIntro = ({ title }: { title: string }) => {
  return (
    <section className="border-t-2 border-b-2">
      <h2 className="font-bold uppercase text-10xl text-center px-8">
        {title}
      </h2>
    </section>
  );
};

export default MainIntro;
