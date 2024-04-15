import React from "react";
import NewProjectForm from "../../_components/NewProjectForm";
import { getSupabaseUser } from "../../actions";
import NotAuthenticated from "../../_components/NotAuthenticated";

export default async function NewProjectPage() {
  const user = await getSupabaseUser();

  if (user?.user === null) {
    return <NotAuthenticated title="Admin New Projects Page" />;
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <NewProjectForm />
    </main>
  );
}
