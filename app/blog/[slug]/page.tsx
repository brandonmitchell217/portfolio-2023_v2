import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Image from "next/image";
import MDXContent from "@/app/blog/_components/MDXContent";

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

  const { title, description, date, tags, featured_image, content } = post;

  return (
    <main className="blog-post relative pb-8 pt-32">
      <article className="max-w-4xl mx-auto px-4 prose">
        {featured_image && (
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={featured_image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
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
