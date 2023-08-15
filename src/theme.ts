import { Theme } from "@emotion/react";

export  const theme:Theme = {
  colors: {
    white: "white",
    black: "black",

    bgAccent: "#FFE066",
    textAccent: "#0051E5",
    text: "#403F3B",

    bgSwiper: "",
    borderSwiper: "",
  },
  transition: {
    transition: "transform 250ms ease-in-out",
  },
  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    ml: "24px",
    mll: "28px",
    n: "18px",
    nl: "20px",
    l: "32px",
    lx: "36px",
    xl: "64px",
  },
  fontWeights: {
    text: 400,
    heading: 500,
    semiBold: 600,
    logo: 700,
  },
  sizes: {
    buttons: {
      normal: "100px",
    },
    small: "200px",
    normal: "300px",
    wide: "500px",
  },
  fonts: {
    mainFamily: "Barlow",
  },
  breakpoints: {
    sm: {
      media: "(max-width: 1920px)",
      width: "390px",
    },
    lg: {
      media: "(min-width: 1920px)",
      width: "1920px",
    },
  },
};
