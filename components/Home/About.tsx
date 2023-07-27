"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const About = () => {
  const [currentAbout, setCurrentAbout] = useState(0);

  useEffect(() => {
    if (currentAbout === 0) {
      console.log("past");
    } else if (currentAbout === 1) {
      console.log("present");
    }
  }, [currentAbout]);

  return (
    <div className="p-1 w-full flex bg-dark text-light rounded-2.5xl">
      <div className="">
        <Image
          src="/me.jpg"
          alt="thingy that is an alt"
          height={500}
          width={333}
          className="rounded-tl-2.5xl rounded-bl-2.5xl"
        />
      </div>

      <div className="flex-1 space-y-5 w-full px-[60px] py-[57px]">
        <div className="w-full flex items-center justify-between">
          <div className="h-1 w-1/2 bg-light rounded-2.5xl" />
          <div className="flex-1 flex items-center justify-end text-4xl font-unbounded font-semibold">
            <span
              className="py-3.5 px-7 bg-lime text-dark rounded-tl-xl rounded-b-xl cursor-pointer"
              onClick={() => setCurrentAbout(0)}
            >
              Past
            </span>
            <span
              className="py-3.5 px-7 bg-transparent text-light rounded-tr-xl rounded-b-xl cursor-pointer"
              onClick={() => setCurrentAbout(1)}
            >
              Present
            </span>
          </div>
        </div>
        <div>
          <p className="text-[22px]">
            Lorem ipsum dolor sit amet consectetur. Amet congue lorem tempor
            nisi. Egestas faucibus viverra non arcu mauris leo ornare
            adipiscing. Amet tempor commodo mauris at lobortis sodales neque
            ultrices massa. Tincidunt scelerisque scelerisque sed amet urna
            volutpat. Donec fermentum egestas nibh tincidunt. Viverra quis eget
            non lacus. Interdum iaculis nisi adipiscing felis malesuada rhoncus.
            Risus sagittis facilisi augue massa faucibus quis morbi porttitor
            nunc. Mi est ligula eu at purus risus adipiscing orci mauris. Amet
            purus donec egestas cursus sit cras volutpat iaculis. Ipsum
            phasellus gravida eu a. Enim lectus quam vitae a ac nulla.
          </p>
        </div>
      </div>
    </div>
  );
};
