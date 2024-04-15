"use client";
import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

type FormProps = {
  title: string;
  description: string;
  live_link: string;
  gh_link: string;
  imageURL: File | null;
  featured: boolean;
  category?: string[];
  tag_array?: string[];
  num: string | number;
};

// TODO: add category and tag_array to form

export default function NewProjectForm() {
  const router = useRouter();
  const supabase = createClient();
  const [formData, setFormData] = useState<FormProps>({
    title: "",
    description: "",
    live_link: "",
    gh_link: "",
    imageURL: null,
    featured: false,
    category: [""],
    tag_array: [""],
    num: "",
  });

  async function createImage() {
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`${formData.imageURL?.name}`, formData.imageURL as File);

    formData.imageURL = null;
    if (error) {
      console.error("Error uploading image", error);
      return;
    }

    return data.path;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const image = await createImage();
    const projectData = {
      ...formData,
      imageURL: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${image}`,
    };

    const { data, error } = await supabase
      .from("projects")
      .insert([projectData]);
    if (error) {
      console.error("Error creating project", error);
      return;
    }

    setFormData({
      title: "",
      description: "",
      live_link: "",
      gh_link: "",
      imageURL: null,
      featured: false,
      category: [""],
      tag_array: [""],
      num: "",
    });

    router.push("/admin/projects");
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />

        <label htmlFor="live_link">Live Link:</label>
        <input
          id="live_link"
          name="live_link"
          type="url"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              live_link: e.target.value,
            })
          }
        />
        <label htmlFor="gh_link">GitHub Link:</label>
        <input
          id="gh_link"
          name="gh_link"
          type="url"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              gh_link: e.target.value,
            })
          }
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          name="image"
          type="file"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              imageURL: e.target.files ? e.target.files[0] : null,
            })
          }
        />
        <label htmlFor="featured">Featured:</label>
        <input id="featured" name="featured" type="checkbox" />
        {/* <label htmlFor="category">Category:</label>
        <input id="category" name="category" type="text" /> */}
        {/* <label htmlFor="tag_array">Tags:</label>
         <input id="tag_array" name="tag_array" type="text" /> */}
        <label htmlFor="num">Number:</label>
        <input
          id="num"
          name="num"
          type="text"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              num: e.target.value,
            })
          }
        />
        <Button
          type="submit"
          className="mx-auto lg:w-full mt-4 px-4 py-1 border border-black bg-black text-white"
        >
          Create Project
        </Button>
      </form>
    </>
  );
}
