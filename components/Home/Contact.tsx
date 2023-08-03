"use client";
import Link from "next/link";
import React from "react";
import BackBtn from "../assets/BackBtn";
import Circles2 from "../assets/Circles2";
import { scrollToTop } from "@/lib/util";

export default function Contact() {
  return (
    <div className="bg-dark text-light w-full pt-14 rounded-tl-[40px] rounded-tr-[40px]">
      <div className="h-full border-t-[6px] border-b-[6px] border-light pt-6 pb-16 w-full">
        <div className="relative max-w-7xl m-auto h-full px-4 xl:px-0">
          <div className="flex flex-col gap-12">
            <h2 className="flex flex-col lg:flex-row lg:justify-between lg:items-center font-unbounded font-bold text-[66px] tracking-[0.02em]">
              Reach Out
              <div className="pt-1.5">
                <Circles2 />
              </div>
            </h2>
            <div className="space-y-8">
              <div className="space-y-1">
                <h5 className="font-semibold text-[28px] tracking-[0.02em]">
                  Socials & Stuff:
                </h5>
                <ul className="flex gap-20">
                  <li className="font-light text-[20px] tracking-[0.025em]">
                    <Link
                      href={"https://www.linkedin.com/in/brandonmitchell217/"}
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li className="font-light text-[20px] tracking-[0.025em]">
                    <Link
                      href={"https://www.github.com/brandonmitchell217"}
                      target="_blank"
                    >
                      Github
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-[28px] tracking-[0.02em]">
                  Email:
                </h5>
                <Link
                  href={"mailto:brandonmitchell217@gmail.com"}
                  className="font-light text-[20px] tracking-[0.025em]"
                >
                  brandonmitchell217@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-0 right-4 xl:right-0 cursor-pointer"
            onClick={scrollToTop}
          >
            <BackBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
