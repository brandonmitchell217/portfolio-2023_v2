import React from "react";
import Star from "@/components/assets/Star";
import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  title: string;
  size: "small" | "large";
  className?: string;
}

export default function SectionTitle({
  title,
  size,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={`flex gap-4 -ml-[7%] sm:ml-0 sm:gap-[21.5px] lg:gap-[43px] items-center ${twMerge(
        className
      )}`}
    >
      <Star />
      <h2
        className={`border-b-[1.5px] md:border-b-[3px] border-dark font-unbounded font-semibold tracking-[0.03em] leading-none ${
          size === "small"
            ? twMerge("text-[32px] md:text-[48px] xl:text-[72px] -ml-4 md:ml-0")
            : twMerge("text-[48px] xl:text-[72px]")
        } `}
      >
        {title}:
      </h2>
    </div>
  );
}