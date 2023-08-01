import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

// TODO: Letter spacing & spacing in general

export default function Nav() {
  const SocialLinks = [
    {
      name: "Email",
      link: "mailto:brandonmitchell217@gmail.com",
      icon: <Mail size={24} />,
    },
    {
      name: "Github",
      link: "https://github.com/brandonmitchell217",
      icon: <Github size={24} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/brandonmitchell217",
      icon: <Linkedin size={24} />,
    },
  ];
  return (
    <nav className="max-w-7xl w-full px-2.5 flex justify-between items-center fixed top-5 z-10">
      <div className="flex items-center gap-4">
        <Link href={"/"}>
          <Image src="/logo.png" alt="Letter B logo" width="70" height="70" />
        </Link>
        <ul className="px-12 flex gap-12 text-xl">
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="">
        <ul className="flex gap-12">
          {SocialLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.link} target="_blank">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
