import Link from "next/link";
import { login } from "./actions";
import { createClient } from "@/lib/supabase/server";

export default async function LoginPage() {
  const supabase = createClient();

  const { data } = await supabase.auth.getSession();

  if (data) {
    return (
      <main className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-center my-8">
          You are logged in
        </h1>
        <div className="flex items-center gap-6">
          <Link href="/admin">Admin Page</Link>
          <Link href="/">Go Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <form className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <div className="mt-4 space-x-6">
          <button
            className="px-4 py-1 border border-black bg-black text-white"
            formAction={login}
          >
            Log in
          </button>
        </div>
      </form>
    </main>
  );
}
