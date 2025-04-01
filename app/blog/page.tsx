import React from "react";
import { getPublishedBlogPosts } from "./actions";
import Link from "next/link";
import Image from "next/image";
import { BlogCardProps } from "@/lib/types";

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  const BlogCard = (item: BlogCardProps) => {
    const post = item.post;
    return (
      <Link
        key={post.id}
        href={`/blog/${post.slug}`}
        className="blog-card"
        aria-label={`Read more about ${post.title}`}
        data-testid={`blog-card-${post.id}`}>
        <article className="h-full p-6 border rounded-lg transition-all group-hover:shadow-lg">
          {post.post_image && (
            <div className="mb-4">
              <Image
                src={post.post_image}
                alt={post.title}
                width={356}
                height={200}
              />
            </div>
          )}
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {post.description.length > 100
              ? post.description.slice(0, 100) + "..."
              : post.description}
          </p>
          <div className="flex gap-2">
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </article>
      </Link>
    );
  };

  return (
    <main className="min-h-screen pt-32 pb-16 container">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
