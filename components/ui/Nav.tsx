import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

// TODO: Letter spacing & spacing in general

export default function Nav() {
  return (
    <nav className="max-w-7xl w-full px-2.5 flex justify-between items-center fixed top-5 z-10">
      <div className="flex items-center gap-4">
        <Link href={"/"}>
          <Image src="/logo.png" alt="Letter B logo" width="70" height="70" />
        </Link>
        <ul className="flex gap-4 text-xl">
          <li>
            <Link href={"/"}>Projects</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="">
        <ul className="flex gap-3">
          <li className="">
            <Link href={"mailto:brandonmitchell217@gmail.com"}>
              <Mail size={20} />
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/brandonmitchell217"}>
              <Github size={20} />
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/brandonmitchell217"}>
              <Linkedin size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
