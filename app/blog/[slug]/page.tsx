import React from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug } from "../actions";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-16 container max-w-4xl">
      <article className="prose lg:prose-xl">
        <h1>{post.title}</h1>
        <div className="flex gap-2 my-4">
          {post.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
} 