/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "374px",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      boxShadow: {
        og: "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
        ogHover:
          "0 1px 2px hsl(0deg 0% 0% / 0.085), 0 2px 3px hsl(0deg 0% 0% / 0.085), 0 4px 5px hsl(0deg 0% 0% / 0.085), 0 8px 9px hsl(0deg 0% 0% / 0.085), 0 16px 17px hsl(0deg 0% 0% / 0.085)",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        unbounded: ["var(--font-unbounded)"],
      },
      fontSize: {
        clamp1: "clamp(2rem, 0.4981rem + 6.391vw, 6.25rem)", // name
        clamp2: "clamp(0.85rem, 0.2406rem + 1.5549vw, 2rem)", // date/location
        clamp3: "clamp(0.875rem, 0.2199rem + 2.2556vw, 2.25rem)", // title
      },
      colors: {
        dark: "hsl(240, 5%, 11%)",
        light: "hsl(222, 15%, 87%)",
        lime: "hsl(77, 92%, 60%)",
        poppy: "hsl(358, 65%, 55%)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [require("autoprefixer")],
};
