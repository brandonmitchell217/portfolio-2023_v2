import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/BlogCard";
import SectionTitle from "@/components/SectionTitle";

export default function BlogIndex() {
  const posts = getAllPosts();
  const mostRecentPost = posts[0];

  return (
    <main className="blog-page pb-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Blog Posts" />
        <section className="my-12" aria-label="Latest Posts">
          <h3 className="text-2xl font-bold my-4">Latest Posts</h3>
          <div className="featured-blog">
            <BlogCard
              key={mostRecentPost.slug}
              {...mostRecentPost}
              type="featured"
            />
            {posts.slice(1).map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
        <section aria-label="All Posts">
          <h4 className="text-2xl font-bold my-4">All Posts</h4>
          <div className="grid-blog">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} type="regular" />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
