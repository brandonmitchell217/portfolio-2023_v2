import Link from "next/link";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: string;
  href?: string | any;
  new_tab?: boolean;
  download?: boolean | string;
}

export default function Button({
  onClick,
  type,
  className,
  children,
  href,
  new_tab,
  download,
}: ButtonProps) {
  if (download) {
    return (
      <a
        href={href}
        download
        className={`py-3 rounded-xl w-full sm:w-64 lg:w-72 border ${className}`}
      >
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`py-3 rounded-xl w-full sm:w-64 lg:w-72 border ${className}`}
        target={new_tab ? "_blank" : "_self"}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 rounded-xl w-full sm:w-64 lg:w-72 border ${className}`}
    >
      {children}
    </button>
  );
}
