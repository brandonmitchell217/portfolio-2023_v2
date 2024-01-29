import { NavigationLinksProps } from "./types";
import { Mail, Github, Linkedin, Home, User, Laptop } from "lucide-react";

export const SocialLinks: NavigationLinksProps[] = [
  {
    id: 1,
    name: "Email",
    url: "mailto:brandonmitchell217@gmail.com",
    icon: <Mail className="w-6 h-6" />,
    iconFnc: (size: string) => {
      return <Mail className={`${size}`} />;
    },
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brandonmitchell217/",
    icon: <Linkedin className="w-6 h-6" />,
    iconFnc: (size: string) => {
      return <Linkedin className={`${size}`} />;
    },
  },
  {
    id: 3,
    name: "Github",
    url: "https://www.github.com/brandonmitchell217",
    icon: <Github className="w-6 h-6" />,
    iconFnc: (size: string) => {
      return <Github className={`${size}`} />;
    },
  },
];

export const NavigationLinks: NavigationLinksProps[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 2,
    name: "About",
    url: "/about",
    icon: <User className="w-6 h-6" />,
  },
  {
    id: 3,
    name: "Projects",
    url: "/projects",
    icon: <Laptop className="w-6 h-6" />,
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
    icon: <Mail className="w-6 h-6" />,
  },
];

export function scrollToTop() {
  window.scrollTo(0, 0);
}

export function getBase64FromUrl1(url: any) {
  return `data:image/png;base64,${url}`;
}

export const getBase64FromUrl = async (url: any) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};
