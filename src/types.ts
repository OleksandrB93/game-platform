export type SliderSlideProps = {
  id: string;
  img: string;
  alt?: string;
  text?: string;
  bage?: string;
};

export type Game = {
  id: string;
  poster: string;
  alt: string;
  bage: string;
};

export type GameArrayProps = {
  title: string;
  games: Game[];
};
