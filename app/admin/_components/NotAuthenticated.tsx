import Button from "@/components/ui/Button";
import React from "react";

export default function NotAuthenticated({ title }: { title: string }) {
  return (
    <main className="min-h-screen flex justify-center items-center text-center px-4">
      <div>
        <h1 className="text-4xl font-bold text-center mt-8">{title}</h1>
        <p>Please login</p>

        <Button
          href="/login"
          className="block mt-4 mx-auto bg-dark text-white hover:bg-light hover:text-dark hover:border-dark"
        >
          Login
        </Button>
      </div>
    </main>
  );
}
