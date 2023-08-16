import { SliderSlideProps } from "../types";

const SliederSlide = ({ img, alt, width, height }: SliderSlideProps) => {
  return (
    <div className={`flex justify-center`}>
      <img
        className={`bg-center bg-cover min-w-[${width}] h-[${height}]`}
        src={process.env.PUBLIC_URL + img}
        alt={alt}
      />
    </div>
  );
};

export default SliederSlide;
