"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [loading, setLoading] = useState<boolean>(true);
  // const [visited, setVisited] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    // localStorage.setItem("hasVisited", "true");

    if (!hasVisited) {
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisited", "true");
      }, 3200);
    } else {
      // setVisited(false);
      setLoading(false);
    }
  }, []);
  return (
    <div
      className={`h-screen w-full z-[99] flex justify-center items-center ${
        !loading && "hidden"
      }`}
    >
      <div className="flex items-center gap-5">
        {/* <Star /> */}
        <div className="text-7xl font-unbounded uppercase tracking-wider flex">
          <h1>Loading</h1>
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: 200 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.35 }}
          >
            .
          </motion.span>
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: 210 }}
            transition={{
              duration: 1.5,
              delay: 0.25,
              repeat: Infinity,
              repeatDelay: 0.25,
            }}
          >
            .
          </motion.span>
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: 220 }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 0.15,
            }}
          >
            .
          </motion.span>
        </div>
      </div>
    </div>
  );
}
