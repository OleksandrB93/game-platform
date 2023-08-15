import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      white: string;
      black: string;
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
}
