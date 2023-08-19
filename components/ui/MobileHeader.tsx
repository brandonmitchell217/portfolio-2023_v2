"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/lib/util";
import { usePathname } from "next/navigation";

export default function MobileHeader() {
  const pathname = usePathname();
  return (
    <header className="absolute z-10 top-0 left-0 right-0 p-4 flex sm:hidden items-center">
      <a href={"/"} className="flex-1 flex items-end">
        <Image src="/logo.png" alt="Letter B logo" width="55" height="55" />
      </a>

      <ul className={pathname !== "/contact" ? "flex gap-6" : "hidden"}>
        {SocialLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.url || ""} target="_blank">
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
