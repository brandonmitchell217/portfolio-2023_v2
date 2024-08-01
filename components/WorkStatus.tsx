"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import MyResume from "./MyResume";
import Button from "./ui/Button";


interface Props {
  working?: boolean;
}

export default function WorkStatus({ working = true }: Props) {

  if (working) {
    return (
      <motion.h3
         initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.2 }}
        className="px-2 md:px-8 lg:px-0 font-medium text-[20px] md:text-[40px] tracking-[0.02em] lg:leading-[60px] text-center">
        I'm currently working as a Frontend Developer at<br className="hidden lg:block" /> <Link href={"https://www.molestreet.com/"} target="_blank" className="hover:text-[#ff4000] transition">Mole Street</Link>.
        {/* We specialize in HubSpot to get sh<Star className="inline-block pb-2 pr-0.5 pl-0.5 w-[65px] md:w-[80px] xl:w-[40px]" color="#ff4000" />t done. */}
      </motion.h3>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.2 }}
        className="px-2 md:px-8 lg:px-0 font-medium text-[20px] md:text-[40px] tracking-[0.02em] lg:leading-[60px] text-center space-y-8"
      >
        <h3>
          I am currently looking for new opportunities. If you'd think I'd be a
          good fit for your team, please feel free to reach out!
        </h3>
        <Button
          href={"/about/resume"}
          className="border-dark bg-dark text-light block max-w-xs m-auto text-center md:text-lg xl:text-xl hover:bg-transparent hover:text-dark transition-all"
        >
          My Resume
        </Button>
      </motion.div>
    </>
  );
}
