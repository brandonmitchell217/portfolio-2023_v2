import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { NavigationLinksProps } from "@/lib/types";

export default function Social({ links }: NavigationLinksProps) {
  return (
    <div className="max-w-xl m-auto">
      <ul className="w-full flex flex-row justify-around items-center">
        {links.map((link: any) => (
          <li key={link.name} className="relative ">
            <Link
              href={link.url}
              className="flex flex-col justify-center items-center relative socialFillText group"
            >
              {/* {link.icon} */}
              {link.name === "Email" && <Mail size={32} />}
              {link.name === "LinkedIn" && <Linkedin size={32} />}
              {link.name === "Github" && <Github size={32} />}

              <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 hidden group-hover:block text-sm">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
