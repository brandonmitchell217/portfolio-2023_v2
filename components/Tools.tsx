"use client";
import React from "react";
import SvgFunc, { TechList } from "./assets/Tech";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Tools() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>);

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut" }}
      ref={ref}
      className="space-y-20 md:space-y-[62px]"
    >
      <SectionTitle
        title="Tools I Use"
        size="small"
        className="justify-center"
      />
      <motion.div
        transition={{ staggerChildren: 0.15, ease: "easeInOut" }}
        initial="hidden"
        animate={isInView && "show"}
        className="xl:max-w-[90%] w-full m-auto grid grid-cols-3 md:grid-cols-5 place-items-center gap-y-8 md:gap-y-16"
      >
        {TechList.map((tool) => (
          <motion.div
            className="group cursor-pointer"
            key={tool.name}
            variants={listItem}
          >
            <SvgFunc
              name={tool.name.toUpperCase()}
              className={`w-14 md:w-16 lg:w-[70px] group-hover:scale-110 fill-dark group-hover:fill-current group-hover:drop-shadow-md transition`}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
