import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/lib/util";

export default function MobileHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 p-4 flex sm:hidden items-center">
      <Link href={"/"} className="flex-1 flex items-end">
        <Image src="/logo.png" alt="Letter B logo" width="55" height="55" />
      </Link>
      <ul className="flex gap-6">
        {SocialLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.url} target="_blank">
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
