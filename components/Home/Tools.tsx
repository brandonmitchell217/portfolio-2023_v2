import React from "react";
import Image from "next/image";
import SvgFunc, { TechList } from "../assets/Tech";
import Star from "../assets/Star";

// TODO: Sizing for the title, perhaps break out into component

export default function Tools() {
  return (
    <div className="space-y-10 md:space-y-[62px]">
      <div className="flex sm:gap-[21.5px] lg:gap-[43px] items-center justify-center">
        <Star />
        <h2 className="border-b-[1.5px] md:border-b-[3px] border-dark font-unbounded text-[24px] sm:text-[32px] md:text-[48px] xl:text-[72px] font-semibold tracking-[0.03em] leading-none">
          Tools I Use:
        </h2>
      </div>
      <div className="xl:max-w-[90%] w-full m-auto grid grid-cols-3 md:grid-cols-5 place-items-center gap-y-8 md:gap-y-16">
        {TechList.map((tool) => (
          <div className="group cursor-pointer" key={tool.name}>
            <SvgFunc
              name={tool.name}
              className={`w-14 md:w-16 lg:w-[70px] group-hover:scale-110 fill-dark group-hover:fill-current group-hover:drop-shadow-md transition`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
