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
        xs: "376px",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
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
        dark: "#1B1B1E",
        light: "#D8DBE2",
        lime: "#C3F73A",
        poppy: "#D64045",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
};
