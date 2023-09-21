import React from "react";
import Star from "@/components/assets/Star";
import { twMerge } from "tailwind-merge";
import Mail from "./assets/Mail";
import Dice from "./assets/Dice";

interface SectionTitleProps {
  title: string;
  size?: "small" | "large";
  className?: string;
}

export default function SectionTitle({
  title,
  size = "large",
  className,
}: SectionTitleProps) {
  const Icon = () => {
    if (title === "Projects") {
      return <Dice />;
    } else if (title === "Contact") {
      return <Mail />;
    } else {
      return <Star />;
    }
  };

  return (
    <div
      className={`${twMerge(
        "flex gap-4 sm:gap-[21.5px] lg:gap-[43px] items-center ",
        className
      )}`}
    >
      {Icon()}
      <h2
        className={`border-b-[1.5px] md:border-b-[3px] border-dark font-unbounded font-semibold tracking-[0.03em] leading-none ${
          size === "small"
            ? twMerge(
                "text-[28px] xs:text-[32px] md:text-[48px] xl:text-[72px] "
              )
            : twMerge("text-[48px] xl:text-[72px]")
        } `}
      >
        {title}:
      </h2>
    </div>
  );
}
