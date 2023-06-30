import { NavlinkType, RecentBlogsType, ProjectsType } from "./types";

import blogimg1 from "@/public/img/blogs/blog1.png";
import blogimg2 from "@/public/img/blogs/blog2.png";
import blogimg3 from "@/public/img/blogs/blog3.png";
import blogimg4 from "@/public/img/blogs/blog4.png";
import blogimg5 from "@/public/img/blogs/blog5.png";
import blogimg6 from "@/public/img/blogs/blog6.png";

import blogImg1 from "@/public/img/recentBlogs/blog-1.png";
import blogImg2 from "@/public/img/recentBlogs/blog-2.png";
import blogImg3 from "@/public/img/recentBlogs/blog-3.png";
import blogImg4 from "@/public/img/recentBlogs/blog-4.png";

import projectImg1 from "@/public/img/projects/project1.png";
import projectImg2 from "@/public/img/projects/project2.png";
import projectImg3 from "@/public/img/projects/project3.png";
import projectImg4 from "@/public/img/projects/project4.png";
import projectImg5 from "@/public/img/projects/project5.png";

export const navLinks: NavlinkType[] = [
  { id: 0, title: "Blog", href: "/", banner: "The blog" },
  { id: 1, title: "Projects", href: "/projects", banner: "Projects" },
  { id: 2, title: "About", href: "/about", banner: "John Doe" },
  { id: 3, title: "Newsletter", href: "/newsletter", banner: "Newsletter" },
];

export const recentBlogs: RecentBlogsType[] = [
  {
    id: 1,
    size: "big",
    img: blogImg1,
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues, engage your audience, and leave a lasting impression on your managers? By leveraging effective storytelling techniques, incorporating visually appealing graphics, and delivering a clear and concise message, you can captivate your audience and ensure that your presentations stand out from the rest. Whether it's crafting a compelling narrative, using impactful visuals, or honing your public speaking skills, the key lies in finding the perfect balance between content, design, and delivery",
    href: "/ux-review-presentation",
    categories: ["Design", "Research", "Presentation"],
    author: "Olivia Rhye",
    date: "1 Jan 2023",
  },
  {
    id: 2,
    img: blogImg2,
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
    href: "/migration-to-linear-101",
    categories: ["Design", "Research"],
    author: "Phoenix Baker",
    date: "1 Jan 2023",
  },
  {
    id: 3,
    img: blogImg3,
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    href: "/building-your-api-stack",
    categories: ["Design", "Research"],
    author: "Lana Steiner",
    date: "1 Jan 2023",
  },
  {
    id: 4,
    size: "big",
    img: blogImg4,
    title: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    href: "/grid-system-for-better-design-user-interface",
    categories: ["Design", "Interface"],
    author: "Olivia Rhye",
    date: "1 Jan 2023",
  },
];

export const mainBlogs: RecentBlogsType[] = [
  {
    id: 1,
    img: blogimg1,
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    href: "/bill-walsh-leadership-lessons",
    categories: ["Leadershop", "Managment"],
    author: "Alec Whitten",
    date: "1 Jan 2023",
  },
  {
    id: 2,
    img: blogimg2,
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    href: "/pm-mental-models",
    categories: ["Product", "Research", "Framework"],
    author: "Demi WIlkinson",
    date: "1 Jan 2023",
  },
  {
    id: 3,
    img: blogimg3,
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    href: "/what-is-wireframing",
    categories: ["Design", "Research"],
    author: "Candice Wu",
    date: "1 Jan 2023",
  },
  {
    id: 4,
    img: blogimg4,
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    href: "/how-collaboration-makes-us-better-designers",
    categories: ["Design", "Research"],
    author: "Natali Craig",
    date: "1 Jan 2023",
  },
  {
    id: 5,
    img: blogimg5,
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    href: "/our-top-10-Javascript-frameworks-to-use",
    categories: ["Software Development", "Tools", "SaaS"],
    author: "Drew Cano",
    date: "1 Jan 2023",
  },
  {
    id: 6,
    img: blogimg6,
    title: "HPodcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    href: "/creating-a-better-cx-community",
    categories: ["Podcast", "Customer Success"],
    author: "Orlando Diggs",
    date: "1 Jan 2023",
  },
];

export const projectsBlogs: ProjectsType[] = [
  {
    id: 1,
    img: projectImg1,
    title: "User Experience Design Dashboard Hotel Management",
    description:
      "The context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.",
    href: "/user-experience-design",
    categories: ["Design", "Research", "Presentation"],
  },
  {
    id: 2,
    img: projectImg2,
    title:
      "Bring of User Experience Design to Policy Making, How to Impact Society",
    description:
      "User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design can be used to create policies that are effec",
    href: "/bring-of-user",
    categories: ["Design", "Presentation"],
  },
  {
    id: 3,
    size: "big",
    img: projectImg3,
    title:
      "Bringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons",
    description:
      "There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to teams and using data and inclusive collaboration to solve user problems",
    href: "/ux-review-presentation",
    categories: ["Design", "Research", "Presentation", "Collaboration"],
  },
  {
    id: 4,
    img: projectImg4,
    title: "Icon Package of Slin Icon",
    description:
      "An icon package is a collection of icons that can be used in various design projects, such as website design, app development, and graphic design.",
    href: "/icon-package-of-slin-icon",
    categories: ["Design", "Branding", "Identity"],
  },
  {
    id: 5,
    img: projectImg5,
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    href: "/ux-review-presentation",
    categories: ["Design", "Research", "Presentation"],
  },
];
