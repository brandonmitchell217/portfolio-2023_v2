import Link from "next/link";
import React from "react";
import SvgFunc, { TechList } from "../assets/Tech";
import { Github, Link as LinkIcon } from "lucide-react";
import { DataProps } from "@/lib/types";

interface ProjectCardProps {
  data: DataProps;
  className?: string;
}
// group-hover:fill-current group-hover:drop-shadow-md transition
export default function ProjectCard({ data, className }: ProjectCardProps) {
  return (
    <div
      className={`text-light bg-dark rounded-2.5xl flex flex-col gap-3 w-[479px] ${className}`}
    >
      <div className="flex justify-between pt-3 pr-5">
        <h3 className="font-semibold text-[32px] flex">
          <span className="block -rotate-90 text-poppy">[0{data.num}]</span>
          {data.title}
        </h3>
        <div className="flex gap-6 items-center">
          <Link href={data.gh_link}>
            <Github size={24} />
          </Link>
          <Link href={data.live_link}>
            <LinkIcon size={24} />
          </Link>
        </div>
      </div>

      <div className="border-t-2 border-light">
        <div className="h-24 px-5 pt-1.5">
          <p>{data.description}</p>
        </div>

        <div className="py-3 px-5">
          <ul className="flex gap-4">
            {data.tag_array.map((tag) => (
              <li key={tag} className="group">
                <SvgFunc
                  name={tag}
                  className={`w-6 group-hover:scale-110 fill-light group-hover:fill-current transition cursor-cell`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
