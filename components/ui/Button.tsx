import Link from "next/link";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: string;
  href?: string | any;
  new_tab?: boolean;
}

export default function Button({
  onClick,
  type,
  className,
  children,
  href,
  new_tab,
}: ButtonProps) {
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
