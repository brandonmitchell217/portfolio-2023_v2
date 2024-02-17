import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function getProjects() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
  const { data: data } = await supabase
    .from("projects")
    .select()
    .eq("featured", true);

  if (!data) {
    return { data: [] };
  }

  return { data };
}
