"use client";
import React from "react";
import { logout } from "../actions";
import Button from "@/components/ui/Button";

export default function SignOut() {
  return (
    <Button
      type="button"
      onClick={() => logout()}
      className="lg:w-40 bg-dark text-white hover:bg-light hover:text-dark hover:border-dark"
    >
      Sign Out
    </Button>
  );
}
