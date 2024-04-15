import React from "react";
import { getAdminProjects } from "../actions";
import ProjectCard from "@/components/ProjectCard";
import ProjectButton from "../_components/ProjectButton";

export default async function AdminProjectsPage() {
  const { user, data } = await getAdminProjects();

  return (
    <main className="flex justify-center items-center flex-col">
      <div className="container flex gap-6 flex-wrap justify-center items-center">
        {data &&
          data.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
      </div>

      <ProjectButton />
    </main>
  );
}
