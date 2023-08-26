import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { NavigationLinksProps } from "@/lib/types";
import SvgFunc from "./assets/Tech";

interface SocialProps {
  links: NavigationLinksProps[];
  new_tab?: boolean;
  size?: number | string;
  hover_text?: boolean;
}

export default function Social({
  links,
  new_tab = false,
  size,
  hover_text = false,
}: SocialProps) {
  return (
    <div className="max-w-xl m-auto">
      <ul className="w-full flex flex-row justify-around items-center">
        {links.map((link: any) => (
          <li key={link.name} className="relative ">
            <Link
              href={link.url}
              className="flex flex-col justify-center items-center relative socialFillText group"
              target={new_tab ? "_blank" : "_self"}
            >
              {/* {link.icon} */}
              {link.name === "Email" && <Mail size={size || 32} />}
              {link.name === "LinkedIn" && <Linkedin size={size || 32} />}
              {link.name === "Github" && <Github size={size || 32} />}
              {/* <SvgFunc name={link.name} choice="social" />
              {link.name} */}

              {hover_text && (
                <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 hidden group-hover:block text-sm">
                  {link.name}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
