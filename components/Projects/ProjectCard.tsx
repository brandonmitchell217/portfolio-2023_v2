import Link from "next/link";
import React from "react";
import SvgFunc, { TechList } from "../assets/Tech";
import { Github, Link as LinkIcon } from "lucide-react";
import { DataProps } from "@/lib/types";

interface ProjectCardProps {
  data: DataProps;
  className?: string;
}

export default function ProjectCard({ data, className }: ProjectCardProps) {
  return (
    <div
      className={`text-light bg-dark rounded-2.5xl flex flex-col gap-3 max-w-[479px] w-full hover:scale-105 transition-transform ${className}`}
    >
      <div className="flex justify-between pt-3 pr-5">
        <h3 className="font-semibold text-[24px] sm:text-[32px] flex">
          <span className="block -rotate-90 text-poppy">[0{data.num}]</span>
          <span className="sm:-ml-2 mr-2">-</span>
          {data.title}
        </h3>
        <div className="flex gap-4 sm:gap-6 items-center">
          <Link
            href={data.gh_link}
            target="_blank"
            className="hover:scale-110 hover:text-lime"
          >
            <Github />
          </Link>
          <Link
            href={data.live_link}
            target="_blank"
            className="hover:scale-110 hover:text-lime"
          >
            <LinkIcon />
          </Link>
        </div>
      </div>

      <div className="border-t-2 border-light">
        <div className="h-24 px-5 pt-1.5 text-[14px] sm:text-base">
          <p>{data.description}</p>
        </div>

        <div className="py-3 px-5">
          <ul className="flex gap-4">
            {data.tag_array.map((tag) => (
              <li key={tag} className="group">
                <SvgFunc
                  name={tag}
                  className={`w-5 sm:w-6 group-hover:scale-110 fill-current sm:fill-light group-hover:fill-current transition cursor-cell`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
