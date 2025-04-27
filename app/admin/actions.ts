'use server';
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import { createClient as supabaseClient } from "@/lib/supabase/client";


export async function getSupabaseUser() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  return user;
}


export async function getAdminProjects() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  if (user) {
    const { data } = await supabase
    .from("projects")
    .select("*")
     .order("num", { ascending: true });
  
  if (!data) {
    return { data: [] };
  }
  
  return { user, data };
  }
  return { data: [] };
}

export async function uploadImage(file: File) {
   const supabase = await createClient();  
   const { data, error: uploadError } = await supabase.storage
     .from("images")
     .upload(`${file.name}`, file);
   
   if (uploadError) {
     console.error("Error uploading image", uploadError);
     return;
   }
   
   return data;
}
 
export async function imageUpload(file: File) {
  const supabase = await createClient();
   const { data, error: uploadError } = await supabase.storage
     .from("images")
     .upload(`${file.name}`, file);
   
   if (uploadError) {
     console.error("Error uploading image", uploadError);
     return;
   }
   
   return data;
}

export async function createProject(formData: any) {
  const supabase = await createClient();
  
  const imageFile = formData.image[0];

  const imageUploadResponse = await uploadImage(imageFile);

  const imageUrl = imageUploadResponse?.path

  const projectData = { ...formData }
  delete projectData.image;

  projectData.imageURL = imageUrl;

  const { data: project, error: projectError } = await supabase.from("projects").insert([projectData]);

  if (projectError) {
    console.error("Error creating project", projectError);
    return;
  }
}

export async function createImage(formData: any) {
  const supabase = await createClient();
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

export async function handleProjectSubmit(formData: any) { 
  const supabase = await createClient();
  const image = await createImage(formData);
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
  
  revalidatePath("/admin/projects", "layout");
  redirect("/admin/projects");

}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) {
    console.error("Error deleting project", error);
    return;
  }

  revalidatePath("/admin/projects", "layout");
}

export async function getAdminBlogPosts() { 
  const supabase = await createClient();

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  return posts;
}


export async function createBlogPost(formData: any) { 
  const supabase = await createClient();
  const { data, error } = await supabase.from("blog_posts").insert([formData]);

  if (error) {
    console.error("Error creating blog post", error);
    return;
  }

  revalidatePath("/admin/blog", "layout");
  redirect("/admin/blog");
}
