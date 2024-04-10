import { login, signup } from "./actions";

export default function LoginPage() {
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
          <button
            className="px-4 py-1 border border-black  bg-transparent"
            formAction={signup}
          >
            Sign up
          </button>
        </div>
      </form>
    </main>
  );
}
