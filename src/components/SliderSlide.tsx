import { SliderSlideProps } from "../types";

interface SliederSlideProps extends SliderSlideProps {
  gameSlider?: boolean;
  heroSlider?: boolean;
}

const SliederSlide = ({
  img,
  alt,
  text,
  gameSlider,
  heroSlider,
}: SliederSlideProps) => {
  return (
    <div>
      {heroSlider && (
        <div
          className={`flex justify-center items-center ${
            gameSlider
              ? "flex flex-col shadow-md border border-[#AECBFF] rounded-md h-[84px] w-[82px] pt-15 gap-x-0  gap-y-[6px]"
              : "border-0"
          } `}
        >
          <img
            className={`min-w-[345px] bg-center bg-cover `}
            src={process.env.PUBLIC_URL + img}
            alt={alt}
          />
          <p className="text-[10px]">{text}</p>
        </div>
      )}
      {gameSlider && (
        <div
          className={`flex justify-center items-center ${
            gameSlider
              ? "flex flex-col shadow-md border border-[#AECBFF] rounded-md h-[84px] w-[82px] pt-15 gap-x-0  gap-y-[6px]"
              : "border-0"
          } `}
        >
          <img
            className={`max-w-[36px] bg-center bg-cover `}
            src={process.env.PUBLIC_URL + img}
            alt={alt}
          />
          <p className="text-[10px]">{text}</p>
        </div>
      )}
    </div>
  );
};

export default SliederSlide;
