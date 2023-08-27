import React from "react";

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
          ? "flex-col-reverse justify-self-start md:flex-row-reverse"
          : "flex-col justify-self-end self-end md:flex-row"
      } lg:max-w-[1029.22px] w-full flex gap-2 items-center justify-between ${className}`}
    >
      {children}
    </div>
  );
}
