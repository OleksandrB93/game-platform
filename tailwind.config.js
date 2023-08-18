/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        black: "black",
        red: "#e71c24",
        bg: "#D9E4F9",
        bgSecond: "#AECBFF",
        outline: "#AECBFF",
        bgAccent: "#ffe066",
        textAccent: "#0051E5",
        text: "#403F3B",

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
