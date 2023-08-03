"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
          <div className="flex-1 flex items-center justify-end text-lg md:text-4xl lg:text-2xl xl:text-4xl font-unbounded font-semibold tracking-[-0.005em]">
            <span
              className={`py-3.5 px-7 ${
                currentAbout === 0
                  ? "bg-lime text-dark"
                  : "bg-transparent text-light"
              } rounded-tl-xl rounded-b-xl cursor-pointer`}
              onClick={() => setCurrentAbout(0)}
            >
              Past
            </span>
            <span
              className={`py-3.5 px-7 ${
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
        <div>
          <p className="px-4 lg:px-0 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] tracking-[0.0275em]">
            {aboutData}
          </p>
        </div>
      </div>
    </div>
  );
};
