import React from "react";
import NewBlogForm from "../../_components/NewBlogForm";
import NotAuthenticated from "../../_components/NotAuthenticated";
import { getSupabaseUser } from "../../actions";

export default async function NewBlogPage() {
   const user = await getSupabaseUser();

  if (!user) {
    return <NotAuthenticated title="New Blog Post" />;
  }

  return (
    <main className="min-h-screen container pt-32 pb-16">
      <h1 id="blog-title" className="text-4xl font-bold text-center mb-8">New Blog Post</h1>
      <NewBlogForm />
    </main>
  );
} 