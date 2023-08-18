/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "rgb(var(--color-white) / <alpha-value>)",
        black: "rgb(var(--color-black) / <alpha-value>)",
        red: "rgb(var(--color-red) / <alpha-value>)",
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        bgSecond: "rgb(var(--color-bgSecond) / <alpha-value>)",
        outline: "rgb(var(--color-outline) / <alpha-value>)",
        bgAccent: "rgb(var(--color-bgAccent) / <alpha-value>)",
        textAccent: "rgb(var(--color-textAccent) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        textLink: "rgb(var(--color-textLink) / <alpha-value>)",

        bgSwiper: "",
        borderSwiper: "",
      },
      width: {
        widthSm: "345px",
      },
      screens: {
        sm: "390px",
        // => @media (min-width: 390px)
        lg: "1920px",
        // => @media (min-width: 1920px)
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
