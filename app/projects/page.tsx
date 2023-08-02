import React from "react";
import ProjectCard from "@/components/Home/ProjectCard";

export default function ProjectsPage() {
  const TestProjects = [
    {
      id: 1,
      name: "Project 1",
      description: "This is a test project",
      github: "https://google.com",
      live: "https://google.com",
      tags: ["React", "NextJS", "TailwindCSS"],
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is a test project",
      github: "https://google.com",
      live: "https://google.com",
      tags: ["React", "NextJS", "TailwindCSS"],
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is a test project",
      github: "https://google.com",
      live: "https://google.com",
      tags: ["React", "NextJS", "TailwindCSS"],
    },
    {
      id: 4,
      name: "Project 4",
      description: "This is a test project",
      github: "https://google.com",
      live: "https://google.com",
      tags: ["React", "NextJS", "TailwindCSS"],
    },
  ];
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
            {TestProjects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} data={{ ...project }} />
            ))}
          </div>
          <div className="justify-self-end self-end lg:max-w-[1029.22px] w-full flex flex-col md:flex-row gap-2 items-center justify-between">
            {TestProjects.slice(2, 4).map((project) => (
              <ProjectCard key={project.id} data={{ ...project }} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
