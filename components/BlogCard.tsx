import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/types";

export default function BlogCard({
  type,
  ...data
}: BlogPost & { type?: "featured" | "regular" }) {
  const { title, date, tags, description, slug, featured_image } = data;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedDescription = description.slice(0, 150) + "...";

  if (type === "featured") {
    return (
      <article className="blog-card featured-blog-card">
        <Link href={`/blog/${slug}`} aria-label={`${title} blog post`}>
          <div className="image">
            <Image
              src={featured_image?.url || "https://placehold.co/600x400"}
              alt={featured_image?.alt || title}
              width={600}
              height={400}
            />
          </div>
          <div className="content">
            <div className="header h-[86px]">
              <p className="font-outfit font-black text-xl mb-2 group-hover:underline">
                {title}
              </p>
              <span className="blog-card__date text-sm">{formattedDate}</span>
            </div>
            <div className="description text-sm">
              <p>{formattedDescription}</p>
            </div>
            <div className="tags">
              {tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="blog-card">
      <Link
        href={`/blog/${slug}`}
        className=""
        aria-label={`${title} blog post`}
      >
        <div className="image">
          <Image
            src={featured_image?.url || "https://placehold.co/600x400"}
            alt={featured_image?.alt || title}
            width={600}
            height={400}
          />
        </div>
        <div className="content">
          <div className="header h-[86px]">
            <p className="font-outfit font-black text-xl mb-2 group-hover:underline">
              {title}
            </p>
            <span className="blog-card__date text-sm">{formattedDate}</span>
          </div>
          <div className="description text-sm">
            <p>{formattedDescription}</p>
          </div>
          <div className="tags flex gap-2 items-center">
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
