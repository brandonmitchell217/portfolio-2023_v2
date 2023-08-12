"use client";
import React, { useState, useEffect } from "react";
import Star from "../assets/Star";

export default function Loading() {
  const [loading, setLoading] = useState<boolean>(true);

  // Timer for a loading screen that will last 2.5 seconds and make loading state false
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1250);
  });

  return (
    <div
      className={`absolute z-[99] w-full h-screen flex justify-center items-center bg-light ${
        !loading && "hidden"
      }`}
    >
      <div className="flex items-center gap-5">
        <Star />
        <h1 className="text-7xl font-unbounded uppercase tracking-wider">
          Loading...
        </h1>
      </div>
    </div>
  );
}
