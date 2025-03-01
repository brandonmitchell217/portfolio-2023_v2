"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

// Dynamically import SimpleMDE to avoid SSR issues
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

type BlogFormProps = {
  title: string;
  content: string;
  description: string;
  published: boolean;
  slug: string;
  tags: string[];
};

export default function NewBlogForm() {
  const router = useRouter();
  const supabase = createClient();
  const [formData, setFormData] = useState<BlogFormProps>({
    title: "",
    content: "",
    description: "",
    published: false,
    slug: "",
    tags: [],
  });
   
   useEffect(() => { 
      const blogTitle = document.querySelector("#blog-title");
      const pageTitle = formData.title ? formData.title : "New Blog Post";

      if (blogTitle) {
         blogTitle.textContent = pageTitle;
      }

   }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create URL-friendly slug if not provided
    const slug = formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-");

    const { data, error } = await supabase
      .from("blog_posts")
      .insert([{ ...formData, slug }]);

    if (error) {
      console.error("Error creating blog post", error);
      return;
    }

    setFormData({
      title: "",
      content: "",
      description: "",
      published: false,
      slug: "",
      tags: [],
    });

    router.push("/admin/blog");
  };

  return (
    <form className="flex flex-col max-w-4xl mx-auto p-4 space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="title" className="text-lg font-medium">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          className="w-full p-2 border rounded-md"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-lg font-medium">Description:</label>
        <textarea
          id="description"
          name="description"
          required
          className="w-full p-2 border rounded-md"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="text-lg font-medium">Content:</label>
        <SimpleMDE
          value={formData.content}
          onChange={(value) =>
            setFormData({
              ...formData,
              content: value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="slug" className="text-lg font-medium">Slug (optional):</label>
        <input
          id="slug"
          name="slug"
          type="text"
          className="w-full p-2 border rounded-md"
          value={formData.slug}
          onChange={(e) =>
            setFormData({
              ...formData,
              slug: e.target.value,
            })
          }
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="tags" className="text-lg font-medium">Tags:</label>
        <input
          id="tags"
          name="tags"
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter tags separated by commas"
          onChange={(e) => {
            const tags = e.target.value.split(",").map((tag) => tag.trim());
            setFormData({
              ...formData,
              tags,
            });
          }}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="published"
          name="published"
          type="checkbox"
          checked={formData.published}
          onChange={(e) =>
            setFormData({
              ...formData,
              published: e.target.checked,
            })
          }
        />
        <label htmlFor="published" className="text-lg font-medium">Published</label>
      </div>

      <Button
        type="submit"
        className="mx-auto lg:w-full mt-4 px-4 py-1 border border-black bg-black text-white"
      >
        Create Blog Post
      </Button>
    </form>
  );
} 