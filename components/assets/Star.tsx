"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Star() {
  return (
    <svg
      width="102"
      height="99"
      viewBox="0 0 102 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-[65px] md:w-[80px] xl:w-[102px]"
    >
      <rect width="102" height="99" rx="20" fill="#1B1B1E" />
      <motion.path
        d="M40.86 17.2H62L60.74 36.52L78.66 29.38L85.1 49.54L66.48 54.3L78.66 69L61.58 81.46L51.36 65.22L41.14 81.46L24.06 69L36.24 54.3L17.62 49.54L24.06 29.38L42.12 36.52L40.86 17.2Z"
        fill="#D64045"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <circle
        cx="51.5"
        cy="49.5"
        r="8"
        transform="rotate(-90 51.5 49.5)"
        fill="#1B1B1E"
        stroke="#1B1B1E"
      />
    </svg>
  );
}
