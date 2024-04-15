import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { getAdminProjects } from "./actions";
import ProjectButton from "./_components/ProjectButton";
import { getSupabaseUser } from "./actions";
import SignOut from "../login/_components/SignOut";

// TODO: create dashboard feel, show number of projects & ability to add new projects

export default async function AdminPage() {
  const supabase = createClient();
  const { data } = await getAdminProjects();
  const user = await getSupabaseUser();

  // console.log(session);

  console.log(user);

  if (user?.user === null) {
    return (
      <main className="min-h-screen">
        <h1 className="text-4xl font-bold text-center mt-8">Admin Page</h1>
        <p>Please log in</p>
        <Button href="/login">Log in</Button>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Page</h1>
      <div>
        <SignOut />
      </div>
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
