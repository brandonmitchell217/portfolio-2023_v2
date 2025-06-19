import React from "react";
import { BlogPost } from "@/lib/mdx";
import Link from "next/link";

export default function BlogCard({ ...data }: BlogPost) {
   const { title, date, tags, description, slug } = data;
   
   const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
   });

   const formattedDescription = description.slice(0, 150) + "...";

  return (
    <article className="blog-card relative px-4 py-5 bg-dark text-light rounded-md">
      <Link href={`/blog/${slug}`} className="flex flex-col gap-2" aria-label={`${title} blog post`}>
        <div className="tags flex gap-2 items-center">
            {tags.slice(0, 2).map((tag) => (
               <span key={tag} className="tag">{tag}</span>
            ))}   
        </div>
        <div className="header h-[86px]">
              <p className="font-unbounded font-black text-xl mb-2">{title}</p>
              <span className="blog-card__date text-sm">{formattedDate}</span>
        </div>
        <div className="description text-sm">
          <p>{formattedDescription}</p>
           </div>
        </Link>
    </article>
  );
}
