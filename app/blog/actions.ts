import { createClient } from "@/lib/supabase/server";

export async function getPublishedBlogPosts() { 
   const supabase = createClient();
 
   const { data: posts } = await supabase
     .from("blog_posts")
     .select("*")
     .eq("published", true)
     .order("created_at", { ascending: false });
   
   return posts;
}
 
export async function getBlogPostBySlug(slug: string) { 
  const supabase = createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
     .eq("slug", slug)
     .eq("published", true)
    .single();

  return post;
}