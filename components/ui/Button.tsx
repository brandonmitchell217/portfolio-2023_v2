import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: string;
}

export default function Button({
  onClick,
  type,
  className,
  children,
}: ButtonProps) {
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
