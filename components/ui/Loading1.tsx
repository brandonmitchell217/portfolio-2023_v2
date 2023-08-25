"use client";
import React, { useEffect, useState } from "react";

export default function Loading1() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2750);
  });
  return (
    <div
      className={`relative h-screen w-full flex justify-center items-center z-[100] ${
        !loading && "hidden"
      }`}
    >
      <div className="bg-dark h-1/2 w-full absolute top-0 left-0"></div>
      <div className="bg-dark h-1/2 w-full absolute bottom-0 left-0"></div>
      <div className="h-80 w-80 rounded-full bg-light relative z-[101] flex items-center justify-center animate-bounce">
        <div className="absolute rounded-full bg-dark w-[85%] h-[85%]"></div>
        <h1 className="relative z-[101] font-unbounded font-bold text-light text-[15vw]">
          B
        </h1>
      </div>
    </div>
  );
}
