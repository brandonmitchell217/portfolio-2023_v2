import React from "react";
import { getSupabaseUser } from "../actions";
import Link from "next/link";
import Button from "@/components/ui/Button";
import NotAuthenticated from "../_components/NotAuthenticated";
import { getAllPosts } from "@/lib/mdx";

export default async function AdminBlogPage() {
  const user = await getSupabaseUser();
  const posts = getAllPosts();

  if (!user) {
    return <NotAuthenticated title="Admin Blog Page" />;
  }

  return (
    <main className="min-h-screen pt-32 space-y-8 container">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-bold">Blog Posts</h1>
        <Button
          href="/admin/blog/new"
          className="bg-dark text-white hover:bg-light hover:text-dark hover:border-dark"
        >
          New Blog Post
        </Button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              <div className="flex gap-2 mt-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`w-3 h-3 rounded-full ${
                  post.published ? "bg-green-500" : "bg-gray-300"
                }`}
              />
              <Link
                href={`/admin/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
