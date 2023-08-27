"use client";
import React, { useState, useEffect } from "react";
import Circles from "./assets/Circles1";
import { motion } from "framer-motion";

export default function InfoHeader({ ...data }) {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const info = data.data;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      setCurrentDate(
        now.toLocaleDateString("en-US", {
          timeZone: "America/New_York",
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      );

      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="relative w-full flex items-center text-[0.675rem] xs:text-clamp2 leading-[1.095] tracking-[-0.02em] overflow-y-hidden">
        <div className="md:w-1/3 flex justify-start">
          <motion.h5
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.65 }}
          >
            {currentTime} EST | {currentDate}
          </motion.h5>
        </div>
        <motion.div
          className="md:w-1/3 flex justify-center scale-75 xs:scale-100 xl:scale-125"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <Circles />
        </motion.div>
        <div className="md:w-1/3 flex justify-end">
          <motion.h5
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.25 }}
          >
            {info.location}
          </motion.h5>
        </div>
      </div>

      <div className="text-center">
        <div className="border-t-4 border-b-4 border-black rounded-sm my-1 xs:my-3">
          <h1 className="uppercase text-[1.6rem] xs:text-clamp1 leading-none font-extrabold tracking-[0.02em]">
            {info.name}
          </h1>
        </div>
        <div className="bg-black text-light text-center w-fit rounded-md xs:rounded-xl m-auto">
          <h2 className="uppercase px-4 py-1.5 md:px-5 md:py-2.5 xs:-mt-1 sm:mt-0 text-[0.75rem] xs:text-clamp3 font-unbounded font-normal">
            {info.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
