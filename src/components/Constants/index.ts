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

import bg1 from "@/public/img/blogInfo/bi-1.png";
import bg2 from "@/public/img/blogInfo/bi-2.png";
import bg3 from "@/public/img/blogInfo/bi-3.png";
import bg4 from "@/public/img/blogInfo/bi-4.png";
import bg5 from "@/public/img/blogInfo/bi-5.png";
import bg6 from "@/public/img/blogInfo/bi-6.png";
import bg7 from "@/public/img/blogInfo/bi-7.png";
import bg8 from "@/public/img/blogInfo/bi-8.png";
import bg9 from "@/public/img/blogInfo/bi-9.png";
import bg10 from "@/public/img/blogInfo/bi-10.png";

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

export const blogInfoContent: any = [
  {
    id: 1,
    img: bg1,
    description: `A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
  
  If you've been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.", suptitle: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.`,
  },
  { id: 2, img: bg2, description: `
  There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
  
  Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.

  Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.

  Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
  `, suptitle: "" },
  { id: 3, img: bg3, title:"Breaking Down the Grid", description: `
  Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.

  Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.

  Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.
  `, suptitle: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins." },
  { id: 4, img: bg4, title:"Examples of Grids in Use", example: "Example 1: Hierarchical Grid", description: `Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`, suptitle: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)" },
  { id: 5, img: bg5, description: `Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`, example:"Example 2: Column Grid", suptitle: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)" },
  { id: 6, img: bg6, description: `Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`, example:"Example 3: Modular Grid", suptitle: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)" },
  { id: 7, img: bg7, description: `Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`, example:"Example 4: Breaking the Grid",suptitle: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)" },
  { id: 8, img: bg8, description: `Using a grid benefits both end users and the designers alike:
  Designers can quickly put together well-aligned interfaces.
  Users can easily scan predictable grid-based interfaces.
  A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`, title:"Benefits of the Grid", suptitle: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right)." },
  { id: 9, img: bg9, description: `
  How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.

  Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.

  Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.
  `, title:"Choosing and Setting Up Your Grid", suptitle: "Easily set the number of columns, the gutter size, and margin size in Figma." },
  { id: 10, img: bg10, description: `
  Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.

  Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.


  `, suptitle: "Content or elements should be placed within and across columns, not gutters." },
];
