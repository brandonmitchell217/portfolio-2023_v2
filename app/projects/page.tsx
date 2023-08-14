import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectSlalom from "@/components/Projects/ProjectSlalom";
import SectionTitle from "@/components/SectionTitle";
import MobileHeader from "@/components/ui/MobileHeader";
export const dynamic = "force-static";

export default async function ProjectsPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: data } = await supabase.from("projects").select();

  return (
    <main className="relative w-full max-w-7xl">
      <MobileHeader />
      <section className="space-y-8 lg:space-y-16 py-24 md:py-36 px-4">
        <SectionTitle title="Projects" size="large" />
        <div className="w-full lg:px-4 flex flex-col gap-2 md:gap-12">
          <ProjectSlalom side="start">
            {data &&
              data
                .filter((project) => project.num === 1 || project.num === 2)
                .map((project) => (
                  <ProjectCard key={project.id} data={{ ...project }} />
                ))}
          </ProjectSlalom>
          <ProjectSlalom side="end">
            {data &&
              data
                .filter((project) => project.num === 3 || project.num === 4)
                .map((project) => (
                  <ProjectCard key={project.id} data={{ ...project }} />
                ))}
          </ProjectSlalom>

          {/* <ProjectSlalom side="start">
            {data &&
              data
                .filter((project) => project.num === 5 || project.num === 6)
                .map((project) => (
                  <ProjectCard key={project.id} data={{ ...project }} />
                ))}
          </ProjectSlalom> */}
        </div>
      </section>
    </main>
  );
}
