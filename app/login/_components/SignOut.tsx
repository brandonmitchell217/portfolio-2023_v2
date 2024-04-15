"use client";
import React from "react";
import { logout } from "../actions";

export default function SignOut() {
  return <button onClick={() => logout()}>Sign Out</button>;
}
