import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import { getSupabaseUser } from "../admin/actions";
import SignOut from "./_components/SignOut";

export default async function LoginPage() {
  const user = await getSupabaseUser();

  if (user?.user != null) {
    return (
      <main className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-center my-8">
          You are logged in
        </h1>
        <div className="flex items-center gap-6">
          <Link href="/admin">Admin Page</Link>
          <Link href="/">Go Home</Link>
        </div>
        <div>
          <SignOut />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <LoginForm />
    </main>
  );
}
