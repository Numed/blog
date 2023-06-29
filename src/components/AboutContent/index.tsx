import me from "@/public/img/about/me.png";
import Image from "next/image";

const AboutContent = () => {
  return (
    <section className="py-8 px-12">
      <Image className="my-0 mx-auto" src={me} alt="My photo" />
      <div className="my-8">
        <h3 className="text-2xl font-bold mb-3">About Me</h3>
        <p className="text-base text-blogGrey">
          As a passionate and experienced UI designer, I am dedicated to
          creating intuitive and engaging user experiences that meet the needs
          of my clients and their users. I have a strong understanding of design
          principles and a proficiency in design tools, and I am comfortable
          working with cross-functional teams to bring projects to fruition. I
          am confident in my ability to create designs that are both visually
          appealing and functional, and I am always looking for new challenges
          and opportunities to grow as a designer.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-3">Skills: </h3>
        <ul className="list-disc">
          <li className="text-base text-blogGrey">
            Extensive experience in UI design, with a strong portfolio of
            completed projects
          </li>
          <li className="text-base text-blogGrey">
            Proficiency in design tools such as Adobe Creative Suite and Sketch
          </li>
          <li className="text-base text-blogGrey">
            Excellent visual design skills, with a strong understanding of
            layout, color theory, and typography
          </li>
          <li className="text-base text-blogGrey">
            Ability to create wireframes and prototypes to communicate design
            concepts
          </li>
          <li className="text-base text-blogGrey">
            Strong communication and collaboration skills, with the ability to
            work effectively with cross-functional teams
          </li>
          <li className="text-base text-blogGrey">
            Experience conducting user research and gathering insights to inform
            design decisions
          </li>
          <li className="text-base text-blogGrey">
            Proficiency in HTML, CSS, and JavaScript
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-3">Experience:</h3>
        <ul className="list-disc">
          <li className="text-base text-blogGrey">
            5 years of experience as a UI designer, working on a variety of
            projects for clients in the tech and retail industries
          </li>
          <li className="text-base text-blogGrey">
            Led the design of a successful e-commerce website, resulting in a
            25% increase in online sales
          </li>
          <li className="text-base text-blogGrey">
            Created wireframes and prototypes for a mobile banking app, leading
            to a 20% increase in app usage
          </li>
          <li className="text-base text-blogGrey">
            Conducted user research and usability testing to inform the redesign
            of a healthcare provider&apos;s website, resulting in a 15% increase
            in website traffic
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3">Education:</h3>
        <ul className="list-disc">
          <li className="text-base text-blogGrey">
            Bachelor&apos;s degree in Graphic Design
          </li>
          <li className="text-base text-blogGrey">
            Certified User Experience Designer (CUED)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutContent;
