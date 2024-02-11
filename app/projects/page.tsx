import React from "react";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import ProjectCard from "@/components/ProjectCard";
import ProjectSlalom from "@/components/ProjectSlalom";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import { DataProps } from "@/lib/types";
// export const dynamic = "force-dynamic";

async function getProjects() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
  const { data: data } = await supabase
    .from("projects")
    .select()
    .eq("featured", true);

  return { data };
}

export default async function ProjectsPage() {
  const { data } = await getProjects();

  // const filter = (data: DataProps[], num: number[]) => {
  //   return data
  //     .filter(
  //       (project: DataProps) => project.num === num[1] || project.num === num[0]
  //     )
  //     .sort((a: DataProps, b: DataProps) => a.num - b.num);
  // };

  // console.log(data);

  return (
    <main className="relative w-full">
      <section className="max-w-7xl m-auto space-y-8 lg:space-y-16 pt-32 pb-24 md:py-36 px-2 sm:px-4">
        <SectionTitle title="Projects" size="large" />
        <div className="w-full lg:px-4 xl:px-8 flex flex-col gap-2 md:gap-12">
          <ProjectSlalom side="start">
            {data &&
              data
                .sort((a: DataProps, b: DataProps) => a.num - b.num)
                .slice(0, 2)
                .map((project: DataProps) => (
                  <ProjectCard key={project.id} data={{ ...project }} />
                ))}
          </ProjectSlalom>

          <ProjectSlalom side="end">
            {data &&
              data
                .sort((a: DataProps, b: DataProps) => a.num - b.num)
                .slice(2, 4)
                .reverse()
                .map((project: DataProps) => (
                  <ProjectCard key={project.id} data={{ ...project }} />
                ))}
          </ProjectSlalom>

          {/* <ProjectSlalom side="start">
            {data &&
              filter(data, [5, 6]).map((project: DataProps) => (
                <ProjectCard key={project.id} data={{ ...project }} />
              ))}
          </ProjectSlalom> */}

          {/* <ProjectSlalom side="end">
            {data &&
              filter(data, [7, 8])
                .reverse()
                .map((project: DataProps) => (
                  <ProjectCard key={project.id} data={{ ...project }} />
                ))}
          </ProjectSlalom> */}
        </div>
        <Button
          href={"https://github.com/brandonmitchell217?tab=repositories"}
          new_tab={true}
          className="border-dark bg-dark text-light block max-w-xs m-auto text-center lg:text-lg xl:text-xl hover:bg-transparent hover:text-dark transition-all"
        >
          Check out my other Repos
        </Button>
      </section>
    </main>
  );
}
