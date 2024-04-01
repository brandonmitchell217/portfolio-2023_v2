import { createClient } from "@supabase/supabase-js";
import { ProjectsProps } from "@/lib/types";


export async function addNewProject(req: ProjectsProps["data"]) {
   const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   );

   
   const { data, error } = await supabase.from("projects").select("*");
      

  
   async function addProject() {
       const dataLength = data?.length || Math.floor(Math.random() * 1000);
      await supabase.from("projects").insert([
        {
          id: dataLength + 1,
          title: req.title,
          description: req.description,
          featured: req.featured,
        },
      ]);
    }

   return addProject();

   
}