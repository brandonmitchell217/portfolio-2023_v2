import Link from "next/link";
import React from "react";
import SvgFunc, { TechList2 } from "../assets/Tech";

export default function Footer() {
  let currentTime = new Date();

  const techArray = [
    "nextjs",
    "typescript",
    "tailwindcss",
    "supabase",
    "framer motion",
  ];

  const siteTech = techArray.map((tech) => {
    return TechList2.find(
      (item) => item.name.toLowerCase() === tech.toLowerCase()
    );
  });

  const shadow =
    "shadow-[0_-2px_5px_-1px_rgba(0,0,0,0.3)] lg:shadow-[0_-1px_10px_-2px_rgba(0,0,0,0.3)]";
  return (
    <footer
      className={`pb-20 pt-8 sm:py-8 bg-dark text-light w-full relative ${shadow}`}
    >
      <div className="max-w-7xl w-full m-auto px-4 xl:px-0">
        <div className="w-full flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center sm:items-end text-xs sm:text-base">
          <div className="space-y-1.5 flex-1 flex flex-col items-center justify-center sm:items-start max-w-[250px] w-full sm:max-w-none sm:w-auto">
            <span className="text-sm self-start">Built with:</span>
            <ul className="flex items-center justify-between max-w-[250px] w-full">
              {siteTech.map((tech) => (
                <li key={tech?.name} className="group relative">
                  <SvgFunc
                    name={tech?.name || ""}
                    className={`w-5 sm:w-6 group-hover:scale-110 fill-current sm:fill-light group-hover:fill-current transition cursor-cell`}
                  />
                  <p className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-light text-dark text-xs shadow-light shadow border-1 border-dark hidden group-hover:block truncate">
                    {tech?.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 text-center text-sm md:text-base">
            <p className="">
              Designed & developed by{" "}
              <Link href={"/"} className="hover:text-lime transition-colors">
                Brandon
              </Link>
            </p>
          </div>

          <div className="text-right text-sm md:text-base flex-1">
            <p>Copyright &#169;{currentTime.getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
