import React from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { getBlogPostBySlug } from "../actions";
import type { WithContext, BlogPosting } from "schema-dts";
import { Metadata } from "next";
import TableOfContents from "../_components/TableOfContents";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const ogImage = post.coverImage || "https://www.brandon-mitchell.dev/me1.jpg";

  return {
    title: post.title,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      authors: ["Brandon Mitchell"],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const postSchema: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Brandon Mitchell",
      url: "https://brandon-mitchell.dev",
    },
    "image": [post.featured_image || post.post_image],
    datePublished: post.created_at,
    dateModified: post.updated_at,
    publisher: {
      "@type": "Person",
      name: "Brandon Mitchell",
      url: "https://brandon-mitchell.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://brandon-mitchell.dev/blog/${post.slug}`,
    },
    keywords: post.tags,
    articleBody: post.content,
    isPartOf: {
      "@type": "Blog",
      "@id": "https://brandon-mitchell.dev/blog",
    },
  };

  return (
    <>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
        />
      <TableOfContents anchors={post.anchors} slug={params.slug} />

      <main className="min-h-screen px-4 md:px-0 pt-32 pb-16 container max-w-4xl">       
        <article className="prose lg:prose-xl">
          {post.featured_image && (
            <Image src={post.featured_image} alt="Blog Article Featured" width={350} height={250} priority className="m-auto" />
          )}
          <h1 className="font-bold text-3xl mt-8">{post.title}</h1>
          <div className="tags flex gap-2 mt-4 mb-8">
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="blog-markdown space-y-28">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </>
  );
}
