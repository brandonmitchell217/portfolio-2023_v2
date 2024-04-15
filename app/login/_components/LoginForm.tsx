"use client";
import React from "react";
import { login } from "../actions";

export default function LoginForm() {
  return (
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
  );
}
