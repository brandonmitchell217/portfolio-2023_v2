import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { getAdminProjects } from "./actions";
import ProjectButton from "./_components/ProjectButton";

// TODO: create dashboard feel, show number of projects & ability to add new projects

export default async function AdminPage() {
  const supabase = createClient();
  const { user, data } = await getAdminProjects();

  if (!user) {
    return (
      <main>
        <h1 className="text-4xl font-bold text-center mt-8">Admin Page</h1>
        <p>Please log in</p>
        <Button href="/login">Log in</Button>
      </main>
    );
  }

  //   if (data) console.log(data);

  return (
    <main className="min-h-screen py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Page</h1>
      <div className="flex justify-between items-center text-white mb-4">
        <Link
          href={"/admin/projects"}
          className="text-xl bg-dark px-4 py-6 max-w-xs w-full h-52 rounded-2xl flex items-end"
        >
          Number of projects - <span>{data && data.length}</span>
        </Link>

        <ProjectButton />
      </div>
    </main>
  );
}
