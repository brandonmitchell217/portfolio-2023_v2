"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SvgFunc from "./assets/Tech";
import { Github, Link as LinkIcon } from "lucide-react";
import { ProjectsProps } from "@/lib/types";
import Image from "next/image";
import { CircleDashed, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { deleteProject } from "@/app/admin/actions";

export interface ProjectCardProps {
  data: ProjectsProps["data"];
  className?: string;
}

export default function ProjectCard({ data, className }: ProjectCardProps) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [activeTitle, setActiveTitle] = useState<Element | null>(null);


  function showTitle(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const target = e.currentTarget;
    const title = target.querySelector(".svg-title");

    const allTitles = document.querySelectorAll('.svg-title');
    allTitles.forEach((t) => t.classList.add('hidden'));

    if (title) {
      if (activeTitle === title) {
        setActiveTitle(null);
      } else {
        title.classList.remove('hidden');
        setActiveTitle(title);
      }
    }
  }

  useEffect(() => {
    data && setLoading(false);
  }, []);

  if (loading) {
    return (
      <div
        className={`text-light bg-dark rounded-2.5xl shadow-og lg:hover:shadow-ogHover flex flex-col justify-center items-center gap-3 h-[203px] md:h-[218px] xl:h-[229px] max-w-[479px] w-full lg:hover:scale-105 transition-transform relative group ${className}`}
      >
        <CircleDashed size={45} className="animate-spin-slow" />
      </div>
    );
  }

  return (
    <div
      className={`text-light bg-dark rounded-2.5xl shadow-og lg:hover:shadow-ogHover flex flex-col gap-3 max-w-[479px] w-full lg:hover:scale-105 transition-transform relative group ${className}`}
    >
      <Image
        src={data.imageURL || ""}
        alt={`Screenshot of ${data.title} project`}
        className="absolute z-50 -top-[170px] left-0 max-w-[300px] h-[170px] rounded-2.5xl hidden lg:group-hover:block"
        width={1482}
        height={833}
      />
      <div className="flex justify-between pt-3 pr-5">
        <h3 className="font-semibold text-[24px] sm:text-[32px] flex">
          <span className="block -rotate-90 text-poppy">
            [{data.num < 10 ? "0" + data.num : data.num}]
          </span>
          <span className="sm:-ml-2 mr-2">-</span>
          {data.title}
        </h3>
        <div className="flex gap-4 sm:gap-6 items-center">
          {data.gh_link === "" ? null : (
            <Link
              href={data.gh_link || ""}
              target="_blank"
              className="hover:scale-110 hover:text-lime"
            >
              <Github />
            </Link>
          )}

          <Link
            href={data.live_link || ""}
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
            {data.tag_array?.map((tag: ProjectsProps["data"]) => (
              <li key={tag} className="group/icon relative" onClick={showTitle}>
                <SvgFunc
                  name={tag}
                  className={`w-5 sm:w-6 group-hover/icon:scale-110 fill-current sm:fill-light group-hover/icon:fill-current transition cursor-cell`}
                />
                <div className={`svg-title hidden lg:hidden absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 capitalize text-lime text-xs border border-lime rounded-2.5xl`}>{tag}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {pathname === "/admin/projects" && (
        <button
          type="button"
          className="absolute right-5 bottom-3 hover:text-poppy"
          onClick={() => deleteProject(data.id)}
        >
          <XIcon size={32} />
        </button>
      )}
    </div>
  );
}
