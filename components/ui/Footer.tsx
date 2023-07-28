import React from "react";

// TODO: javascript for current year
export default function Footer() {
  return (
    <footer className="bg-dark text-light w-full py-10">
      <div className="max-w-7xl w-full m-auto px-4 flex justify-between items-center">
        <p>
          Designed & developed by <br className="md:hidden" />
          Brandon
        </p>

        <p>Copyright &#169;2023</p>
      </div>
    </footer>
  );
}
