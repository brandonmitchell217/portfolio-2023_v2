"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const PastPresent = () => {
  const pastImage: string = "/pastMe.jpg";
  const presentImage: string = "/me1.jpg";
  const [currentAbout, setCurrentAbout] = useState<number>(1);
  const aboutData: { label: string; text: string; image: string }[] = [
    {
      label: "past",
      text: "Through the years I've always had an interest in technology in some kind of way. It all started with Dreamweaver & MySpace layouts back in middle school. Not to state my age or anything again... Since then I have worked with game development, 3D modeling & animation. Before having kids & learning web development, I've been a cook, dishwasher, baker, teacher & a soldier. Hardwork & dedication are at my core. These paths have led me to being the more adventurous, hardworking developer I am today. Growing up, video games were a huge part of my life. It was once I started trying to create models for games that I found my interest in design. While I'm certainly more confident at the code side of things, I'll always seek to create awesome things that are both cool to look at & functional.",
      image: pastImage,
    },
    {
      label: "present",
      text: "My name is Brandon & I'm a 32 year old developer from North Carolina. I'm really enjoying using NextJS, TailwindCSS & framer-motion right now. Away from the computer, you'll usually find me spending time with my wife & two kids. When I'm not coding or chasing the kids around, which is more rare these days, music is always where my brain goes to settle down. Over the past few years however, code has become my primary focus. It lets me create, explore & never have a finish line. I love the fact that with every new thing I learn, a whole new world of other things I do not know opens up. I strive to learn something everyday & try to learn from anyone who is willing to teach. I bring a strong work ethic, a passion for learning & a sense of urgency with every project to which I'm involved.",
      image: presentImage,
    },
  ];

  const spring = {
    type: "spring",
    damping: 15,
    stiffness: 15,
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transformOrigin: "center" }}
      transition={{ duration: 0.5, type: spring }}
      className="px-1 py-4 lg:py-1 w-full flex flex-col lg:flex-row bg-dark text-light rounded-2.5xl"
    >
      {/* left */}
      <motion.div>
        <Image
          src={aboutData[currentAbout].image}
          alt={`Picture of Me, Brandon Mitchell - ${
            currentAbout === 1 ? "Present" : "Past"
          }`}
          height={550}
          width={383}
          priority={true}
          placeholder="blur"
          blurDataURL={aboutData[currentAbout].image}
          className={
            "rounded-2.5xl lg:rounded-none lg:rounded-tl-2.5xl lg:rounded-bl-2.5xl m-auto w-60 sm:w-72 md:w-auto lg:h-full xl:w-[450px]"
          }
        />
      </motion.div>

      {/* right */}
      <div className="flex-1 space-y-4 lg:space-y-8 w-full px-0.5 xs:px-4 lg:px-[60px] py-6 lg:pt-[57px] min-h-[350px]">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="h-0.5 md:h-1 w-full md:w-1/2 bg-light rounded-2.5xl" />
          <div className="w-full flex-1 flex items-center justify-end text-lg md:text-4xl lg:text-2xl xl:text-4xl font-unbounded font-semibold tracking-[-0.005em]">
            <span
              className={`w-1/2 md:w-auto text-center py-3.5 px-7 border-2 ${
                currentAbout === 0
                  ? twMerge(
                      "bg-lime text-dark border-transparent rounded-l-xl rounded-b-none md:border-none md:rounded-br-xl"
                    )
                  : twMerge(
                      "bg-transparent text-light hover:text-light/80 border-lime rounded-tl-xl rounded-bl-xl md:border-none"
                    )
              }  cursor-pointer`}
              onClick={() => setCurrentAbout(0)}
            >
              Past
            </span>
            <span
              className={`w-1/2 md:w-auto text-center py-3.5 px-7 border-2 ${
                currentAbout === 1
                  ? twMerge(
                      "bg-lime text-dark border-transparent rounded-tr-xl rounded-br-xl md:border-none md:rounded-bl-xl"
                    )
                  : twMerge(
                      "bg-transparent text-light hover:text-light/80 border-lime rounded-tr-xl rounded-br-xl rounded-bl-none md:border-none"
                    )
              } cursor-pointer`}
              onClick={() => setCurrentAbout(1)}
            >
              Present
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="px-4 lg:px-0 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] tracking-[0.0275em]">
            {aboutData[currentAbout].text}
          </p>
          {currentAbout === 1 && (
            <Link
              href={"/projects"}
              className="px-2 sm:px-0 flex justify-end group text-[14px] md:text-base hover:text-light/80"
            >
              View some of my work
              <svg
                viewBox="0 0 197 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block ml-2.5 h-auto w-1/3 sm:w-[150px] md:group-hover:w-36 transition-all origin-left duration-150"
              >
                <path
                  d="M196.53 7.03033C196.823 6.73744 196.823 6.26256 196.53 5.96967L191.757 1.1967C191.464 0.903806 190.99 0.903806 190.697 1.1967C190.404 1.48959 190.404 1.96447 190.697 2.25736L194.939 6.5L190.697 10.7426C190.404 11.0355 190.404 11.5104 190.697 11.8033C190.99 12.0962 191.464 12.0962 191.757 11.8033L196.53 7.03033ZM0 7.25H196V5.75H0V7.25Z"
                  fill="#D64045"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};
