import Link from "next/link";
import React from "react";

// TODO: javascript for current year
export default function Footer() {
  var currentTime = new Date();
  const shadow =
    "shadow-[0_-2px_5px_-1px_rgba(0,0,0,0.3)] lg:shadow-[0_-1px_10px_-2px_rgba(0,0,0,0.3)]";
  return (
    <footer
      className={`pb-20 pt-8 sm:py-8 bg-dark text-light w-full relative ${shadow}`}
    >
      <div className="max-w-7xl w-full m-auto px-4 xl:px-0">
        <div className="w-full flex justify-between items-center text-xs sm:text-base">
          <p>
            Designed & developed by{" "}
            <Link href={"/"} className="hover:text-lime transition-colors">
              Brandon
            </Link>
          </p>

          <p>Copyright &#169;{currentTime.getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
