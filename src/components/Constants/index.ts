type NavLink = {
  id: number;
  title: string;
  href: string;
  banner: string;
};

export const navLinks: NavLink[] = [
  { id: 0, title: "Blog", href: "/", banner: "The blog" },
  { id: 1, title: "Projects", href: "/projects", banner: "Projects" },
  { id: 2, title: "About", href: "/about", banner: "John Doe" },
  { id: 3, title: "Newsletter", href: "/newsletter", banner: "Newsletter" },
];
