export type SliderSlideProps = {
  id: string;
  img: string;
  alt?: string;
  text?: string;
  bage?: string;
  about?: string;
  fullName?: string;
  job?: string;
};

export type Game = {
  id: string;
  poster: string;
  alt: string;
  bage: string;
};

export type GameArrayProps = {
  games: Game[];
};


export interface NavLinkProps {
  navLink: NavLink[];
}

export type NavLink = {
  id: string;
  pathname: string;
}


