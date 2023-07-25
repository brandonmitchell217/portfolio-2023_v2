"use client";
import React, { useState, useEffect } from "react";
import Circles from "../assets/Circles1";

export default function InfoHeader({ ...data }) {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
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
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="md:px-4 xl:px-12 flex justify-between items-center text-[3.5vw] md:text-[1.5rem] font-medium xl:text-[32px] leading-[1.095] tracking-[-0.02em]">
        <h5>
          {currentTime} EST | {currentDate}
        </h5>
        {/* <div className="w-4 h-4 rounded-full bg-black"></div> */}
        <Circles />
        <h5>{info.location}</h5>
      </div>

      <div className="text-center">
        <div className="border-t-4 border-b-4 border-black rounded-sm my-3">
          <h1 className="uppercase text-[8.6vw] md:text-6xl xl:text-[100px] leading-none font-extrabold tracking-[0.02em]">
            {info.name}
          </h1>
        </div>
        <div className="bg-black text-light text-center w-fit rounded-xl m-auto">
          <h2 className="uppercase px-4 py-1.5 md:px-5 md:py-2.5 text-[3.55vw] md:text-3xl xl:text-4xl font-unbounded font-normal">
            {info.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
