export type SliderSlideProps = {
  id: string;
  img: string;
  img2x?: string;
  imgLG?: string;
  imgLG2x?: string;
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
};
