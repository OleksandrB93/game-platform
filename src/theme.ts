export interface Theme {
  colors: {
    white: string;
    black: string;
    bg:string;
    bgAccent: string;
    textAccent: string;
    text: string;
    bgSwiper: string;
    borderSwiper: string;
  };
  transition: {
    transition: string;
  };
  fontSizes: {
    xs: string;
    s: string;
    m: string;
    ml: string;
    mll: string;
    n: string;
    nl: string;
    l: string;
    lx: string;
    xl: string;
  };
  fontWeights: {
    text: number;
    heading: number;
    semiBold: number;
    logo: number;
  };
  sizes: {
    buttons: {
      normal: string;
    };
    small: string;
    normal: string;
    wide: string;
  };
  fonts: {
    mainFamily: string;
  };
  breakpoints: {
    sm: {
      media: string;
      width: string;
    };
    lg: {
      media: string;
      width: string;
    };
  };
}

export const theme: Theme = {
  colors: {
    white: "white",
    black: "black",

    bg: "#D9E4F9",
    bgAccent: "#ffe066",
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
