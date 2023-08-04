import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ProjectCard from "@/components/Projects/ProjectCard";

export default async function ProjectsPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: data } = await supabase.from("projects").select();

  return (
    <main className="w-full py-32 px-4 max-w-7xl">
      <section className="space-y-16">
        <div className="titleCont">
          <h2 className="inline-block border-b-[1.5px] md:border-b-[3px] lg:border-b-[6px] border-dark font-unbounded text-[24px] sm:text-[32px] md:text-[48px] xl:text-[72px] font-semibold tracking-[0.03em] leading-none">
            Projects:
          </h2>
        </div>
        <div className="w-full flex flex-col gap-2 md:gap-12">
          <div className="justify-self-start lg:max-w-[1029.22px] w-full flex flex-col md:flex-row gap-2 items-center md:justify-between">
            {data &&
              data
                .filter((project) => project.featured)
                .slice(0, 2)
                .map((project) => (
                  <ProjectCard key={project.id} data={{ ...project }} />
                ))}
          </div>
          <div className="justify-self-end self-end lg:max-w-[1029.22px] w-full flex flex-col md:flex-row gap-2 items-center justify-between">
            {data &&
              data
                .filter((project) => project.featured)
                .slice(2, 4)
                .map((project) => (
                  <ProjectCard key={project.id} data={{ ...project }} />
                ))}
          </div>
        </div>
      </section>
    </main>
  );
}
