"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="xs:max-w-[60vw] md:max-w-[417px] px-3 xs:px-0 flex flex-col items-end self-end leading-6 tracking-[0.065em]"
    >
      <p className="pr-6 md:pr-4 text-[15px] md:text-[1.125rem] font-light">
        A man is a success if he gets up in the morning and gets to bed at
        night, and in between he does what he wants to do.
      </p>
      <p className="font-medium text-normal md:text-[1.25rem] lg:mt-1">
        -Bob Dylan
      </p>
    </motion.div>
  );
}
