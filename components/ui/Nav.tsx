import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Nav() {
  return (
    <nav className="max-w-7xl w-full px-2.5 flex justify-between items-center fixed top-5 z-10">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Letter B logo" width="70" height="70" />
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
            <Mail size={20} />
          </li>
          <li>
            <Github size={20} />
          </li>
          <li>
            <Linkedin size={20} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
