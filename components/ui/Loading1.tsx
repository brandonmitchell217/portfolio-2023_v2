"use client";
import React, { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";

export default function Loading1() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });
  return (
    <motion.div
      className={`relative h-screen w-full flex justify-center items-center z-[100] ${
        !loading && "hidden"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      <motion.div
        className="bg-dark h-1/2 w-full absolute top-0 left-0"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, originY: "top" }}
        transition={{ duration: 0.75, delay: 0.25 }}
      ></motion.div>
      <motion.div
        className="bg-dark h-1/2 w-full absolute bottom-0 left-0"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, originY: "bottom" }}
        transition={{ duration: 0.75, delay: 0.35 }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 1, rotate: 0 }}
        animate={{ opacity: 0, rotate: 360 }}
        transition={{ duration: 0.85, delay: 0.1 }}
        className="h-[22vw] w-[22vw] rounded-full bg-light relative z-[101] flex items-center justify-center"
      >
        <div className="absolute rounded-full bg-dark w-[85%] h-[85%]"></div>
        <h1 className="relative z-[101] font-unbounded font-bold text-light text-[15vw]">
          B
        </h1>
      </motion.div>
    </motion.div>
  );
}
