import React from "react";
import NewProjectForm from "../../_components/NewProjectForm";
import { getSupabaseUser } from "../../actions";
import Button from "@/components/ui/Button";

export default async function NewProjectPage() {
  const user = await getSupabaseUser();

  if (user?.user === null) {
    return (
      <main className="min-h-screen flex justify-center items-center flex-col">
        <p>Please log in</p>
        <Button href="/login" className="text-center">
          Log in
        </Button>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <NewProjectForm />
    </main>
  );
}
