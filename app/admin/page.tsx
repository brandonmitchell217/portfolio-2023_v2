import Link from "next/link";
import { getAdminProjects } from "./actions";
import ProjectButton from "./_components/ProjectButton";
import SignOut from "../login/_components/SignOut";
import NotAuthenticated from "./_components/NotAuthenticated";

export default async function AdminPage() {
  const { user, data } = await getAdminProjects();

  if (user?.user === null) {
    return <NotAuthenticated title="Admin Page" />;
  }

  return (
    <main className="min-h-screen pt-32 space-y-32 container">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-bold text-center">Dashboard</h1>
        <SignOut />
      </div>
      <div className="flex flex-col justify-between items-center gap-8 text-white">
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
