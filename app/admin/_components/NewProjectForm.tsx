"use client";
import React, { useState } from "react";
// import { createProject, uploadImage } from "../actions";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

// category: string[] | null
// created_at: string | null
// description: string | null
// featured: boolean | null
// gh_link: string | null
// id: number
// imageURL: string | null
// live_link: string | null
// num: number | null
// tag_array: string[] | null
// title: string | null

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

export default function NewProjectForm() {
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
    // console.log(data);

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
    // console.log(data);
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
        <button
          type="submit"
          className="px-4 py-1 border border-black bg-black text-white"
        >
          Create Project
        </button>
      </form>
      {/* <button
        onClick={() => getUser()}
        className="px-4 py-1 border border-black bg-black text-white"
      >
        Get images
      </button> */}
    </>
  );
}
