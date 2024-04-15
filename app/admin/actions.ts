'use server';
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import { createClient as supabaseClient } from "@/lib/supabase/client";


export async function getSupabaseUser() {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
  return user;
}


export async function getAdminProjects() {
  const supabase = createClient();
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
   const supabase = createClient();  
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
  const supabase = createClient();
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
  const supabase = createClient();
  
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