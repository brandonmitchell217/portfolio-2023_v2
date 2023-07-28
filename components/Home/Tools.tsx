import React from "react";
import Image from "next/image";
import { ToolsList } from "../assets/Tech";
import Star from "../assets/Star";

export default function Tools() {
  return (
    <div className="space-y-10 md:space-y-[62px]">
      <div className="flex sm:gap-[21.5px] lg:gap-[43px] items-center justify-center">
        <Star />
        <h2 className="border-b-[1.5px] md:border-b-[3px] border-dark font-unbounded text-[24px] sm:text-[32px] md:text-[48px] xl:text-[72px] font-semibold tracking-[0.03em] leading-none">
          Tools I Use:
        </h2>
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-5 place-items-center gap-y-8 md:gap-y-16">
        {ToolsList.map((tool) => (
          <div key={tool.name}>{tool.icon}</div>
        ))}
      </div>
    </div>
  );
}
