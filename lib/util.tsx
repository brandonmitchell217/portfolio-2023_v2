import { NavigationLinksProps } from "./types";
import { Mail, Github, Linkedin, Home, User, Laptop } from "lucide-react";

export const SocialLinks: NavigationLinksProps[] = [
  {
    id: 1,
    name: "Email",
    url: "mailto:brandonmitchell217@gmail.com",
    icon: <Mail className="w-12 h-12" />,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brandonmitchell217/",
    icon: <Linkedin className="w-12 h-12" />,
  },
  {
    id: 3,
    name: "Github",
    url: "https://www.github.com/brandonmitchell217",
    icon: <Github className="w-12 h-12" />,
  },
];

export const NavigationLinks: NavigationLinksProps[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
    query: "",
    icon: <Home className="w-12 h-12" />,
  },
  {
    id: 2,
    name: "About",
    url: "/#about",
    query: "",
    icon: <User className="w-12 h-12" />,
  },
  {
    id: 3,
    name: "Projects",
    url: "/projects",
    query: "",
    icon: <Laptop className="w-12 h-12" />,
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
    query: "",
    icon: <Mail className="w-12 h-12" />,
  },
];

// Need a function to scroll to top of page on onClick
export function scrollToTop() {
  window.scrollTo(0, 0);
}
