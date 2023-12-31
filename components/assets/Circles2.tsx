import React from "react";
import { motion } from "framer-motion";

export default function Circles2() {
  return (
    <motion.svg
      width="277"
      height="84"
      viewBox="0 0 277 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-40 md:w-auto"
    >
      <motion.ellipse
        cx="42.2333"
        cy="42"
        rx="42.2333"
        ry="42"
        transform="matrix(1 0 0 -1 0.733398 84)"
        fill="#D8DBE2"
      />
      <motion.path
        d="M177.867 42C177.867 20.4765 160.317 3 138.633 3C116.95 3 99.4001 20.4765 99.4001 42C99.4001 63.5235 116.95 81 138.633 81C160.317 81 177.867 63.5235 177.867 42Z"
        stroke="#D8DBE2"
        strokeWidth="6"
      />
      <motion.ellipse
        cx="42.2333"
        cy="42"
        rx="42.2333"
        ry="42"
        transform="matrix(1 0 0 -1 192.534 84)"
        fill="#D8DBE2"
      />
    </motion.svg>
  );
}
