"use client";
import React from "react";

import { addNewProject } from "./actions";

export default function AdminPage() {
  const [project, setProject] = React.useState<any>({
    title: "",
    description: "",
    featured: false,
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewProject(project);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1>Admin Page</h1>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col justify-center items-center"
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={project.description}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
        />
        <label htmlFor="featured">Featured</label>
        <input
          type="checkbox"
          id="featured"
          name="featured"
          checked={project.featured}
          onChange={(e) =>
            setProject({ ...project, featured: e.target.checked })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
