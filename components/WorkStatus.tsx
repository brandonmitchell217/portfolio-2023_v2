"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MyResume from "./MyResume";
import Button from "./ui/Button";

interface Props {
  working?: boolean;
}

export default function WorkStatus({ working = true }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);

  if (working) {
    return (
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.2 }}
        className="px-2 md:px-8 lg:px-0 font-medium text-[20px] md:text-[40px] tracking-[0.02em] lg:leading-[60px] text-center"
      >
        I am currently on the product operations team at{" "}
        <Link href={"https://www.gloo.us/"} target="_blank">
          <Image
            src={"/gloo.png"}
            alt="Gloo Logo"
            height={45}
            width={89}
            className="inline pb-1 scale-50 -m-[22px] md:scale-100 md:m-0 lg:hover:scale-105 transition"
          />
        </Link>
        . Our team uses a combination of both React & Vue along with HubSpot to
        help drive new user/partner engagement.
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
