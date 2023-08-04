"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// TODO: Real text & past image

export const PastPresent = () => {
  const [currentAbout, setCurrentAbout] = useState(0);
  const [aboutData, setAboutData] = useState("");
  const pastAbout =
    "Lorem ipsum dolor sit amet consectetur. Amet congue lorem tempor nisi. Egestas faucibus viverra non arcu mauris leo ornare adipiscing. Amet tempor commodo mauris at lobortis sodales neque ultrices massa. Tincidunt scelerisque scelerisque sed amet urna volutpat. Donec fermentum egestas nibh tincidunt. Viverra quis eget non lacus. Interdum iaculis nisi adipiscing felis malesuada rhoncus. Risus sagittis facilisi augue massa faucibus quis morbi porttitor nunc. Mi est ligula eu at purus risus adipiscing orci mauris. Amet purus donec egestas cursus sit cras volutpat iaculis. Ipsum phasellus gravida eu a. Enim lectus quam vitae a ac nulla.";
  const presentAbout =
    "Enim lectus quam vitae a ac nulla. Lorem ipsum dolor sit amet consectetur. Amet congue lorem tempor nisi. Egestas faucibus viverra non arcu mauris leo ornare adipiscing. Amet tempor commodo mauris at lobortis sodales neque ultrices massa. Tincidunt scelerisque scelerisque sed amet urna volutpat. Donec fermentum egestas nibh tincidunt. Viverra quis eget non lacus. Interdum iaculis nisi adipiscing felis malesuada rhoncus. Risus sagittis facilisi augue massa faucibus quis morbi porttitor nunc. Mi est ligula eu at purus risus adipiscing orci mauris. Amet purus donec egestas cursus sit cras volutpat iaculis. Ipsum phasellus gravida eu a. Enim lectus quam vitae a ac nulla. Enim lectus quam vitae a ac nulla.";

  useEffect(() => {
    if (currentAbout === 0) {
      setAboutData(pastAbout);
    } else if (currentAbout === 1) {
      setAboutData(presentAbout);
    }
  }, [currentAbout]);

  return (
    <div className="px-1 py-4 lg:py-1 w-full flex flex-col lg:flex-row bg-dark text-light rounded-2.5xl">
      {/* left */}
      <div className="">
        <Image
          src="/me.jpg"
          alt="thingy that is an alt"
          height={550}
          width={383}
          className="rounded-2.5xl lg:rounded-none lg:rounded-tl-2.5xl lg:rounded-bl-2.5xl m-auto w-60 sm:w-72 md:w-auto"
        />
      </div>

      {/* right */}
      <div className="flex-1 space-y-4 lg:space-y-8 w-full px-4 lg:px-[60px] py-6 lg:pt-[57px] min-h-[350px]">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="h-0.5 md:h-1 w-full md:w-1/2 bg-light rounded-2.5xl" />
          <div className="w-full flex-1 flex items-center justify-end text-lg md:text-4xl lg:text-2xl xl:text-4xl font-unbounded font-semibold tracking-[-0.005em]">
            <span
              className={`w-1/2 md:w-auto text-center py-3.5 px-7 ${
                currentAbout === 0
                  ? "bg-lime text-dark"
                  : "bg-transparent text-light"
              } rounded-tl-xl rounded-b-xl cursor-pointer`}
              onClick={() => setCurrentAbout(0)}
            >
              Past
            </span>
            <span
              className={`w-1/2 md:w-auto text-center py-3.5 px-7 ${
                currentAbout === 1
                  ? "bg-lime text-dark"
                  : "bg-transparent text-light"
              } rounded-tr-xl rounded-b-xl cursor-pointer`}
              onClick={() => setCurrentAbout(1)}
            >
              Present
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="px-4 lg:px-0 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] tracking-[0.0275em]">
            {aboutData}
          </p>
          {currentAbout === 1 && (
            <Link href={"/projects"} className="block self-end group">
              View some of my work
              <svg
                width="197"
                height="13"
                viewBox="0 0 197 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block ml-2.5 group-hover:w-36 transition-all origin-left duration-150"
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
    </div>
  );
};
