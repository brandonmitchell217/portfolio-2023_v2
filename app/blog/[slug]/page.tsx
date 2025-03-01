import React from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug } from "../actions";
import type { WithContext, BlogPosting } from "schema-dts";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  const ogImage = post.coverImage || 'https://brandon-mitchell.dev/og-image.jpg';

  return {
    title: post.title,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      authors: ['Brandon Mitchell'],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
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
      url: "https://brandon-mitchell.dev"
    },
    datePublished: post.created_at,
    dateModified: post.updated_at,
    publisher: {
      "@type": "Person",
      name: "Brandon Mitchell",
      url: "https://brandon-mitchell.dev"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://blog.brandon-mitchell.dev/${post.slug}`
    },
    keywords: post.tags,
    articleBody: post.content,
    isPartOf: {
      "@type": "Blog",
      "@id": "https://blog.brandon-mitchell.dev"
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-16 container max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
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