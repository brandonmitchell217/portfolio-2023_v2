import React from "react";
import { getAdminProjects } from "../actions";
import ProjectCard from "@/components/ProjectCard";
import ProjectButton from "../_components/ProjectButton";
import NotAuthenticated from "../_components/NotAuthenticated";

export default async function AdminProjectsPage() {
  const { user, data } = await getAdminProjects();

  if (user?.user === null) {
    return <NotAuthenticated title="Admin Projects Page" />;
  }

  return (
    <main className="py-32 flex justify-center items-center flex-col gap-24">
      <div className="container flex flex-col justify-center items-center lg:flex-row lg:flex-wrap gap-6">
        {data &&
          data.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
      </div>
      <ProjectButton />
    </main>
  );
}
