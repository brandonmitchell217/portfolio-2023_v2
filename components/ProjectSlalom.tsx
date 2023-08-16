import React from "react";
import { motion } from "framer-motion";

interface ProjectSlalomProps {
  side: "start" | "end";
  children?: React.ReactNode;
  className?: string;
}

export default function ProjectSlalom({
  side,
  children,
  className,
}: ProjectSlalomProps) {
  return (
    <div
      className={`${
        side === "start"
          ? "justify-self-start md:flex-row"
          : "justify-self-end self-end md:flex-row-reverse"
      } lg:max-w-[1029.22px] w-full flex flex-col gap-2 items-center justify-between ${className}`}
    >
      {children}
    </div>
  );
}
