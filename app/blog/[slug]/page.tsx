import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Image from "next/image";
import MDXContent from "@/app/blog/_components/MDXContent";
import { Info } from "lucide-react";
import TableOfContents from "../_components/TableOfContents";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    description,
    date,
    tags,
    featured_image,
    content,
  } = post;

  return (
    <main className="blog-post relative container mx-auto pb-8 pt-16 px-4 flex flex-col lg:flex-row gap-20">
      <div className="relative flex-[1]">
        <TableOfContents title={title} />
      </div>
      <article className="max-w-4xl mx-auto prose">
        {featured_image && (
          <div className="relative w-full aspect-video mb-8">
            <Image
              src={featured_image.url}
              alt={featured_image.alt || title}
              fill
              className="object-cover rounded-lg mt-0"
            />
          </div>
        )}

        <div className="flex gap-1 text-md items-center">
          <Info />
          <p className="text-md">Image from</p>
          <p
            dangerouslySetInnerHTML={
              featured_image?.attribution
                ? { __html: featured_image?.attribution }
                : undefined
            }
          ></p>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {tags.length > 0 && (
              <div className="flex gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className="blog-post__content">
          <MDXContent content={content} />
        </div>
      </article>
    </main>
  );
}
