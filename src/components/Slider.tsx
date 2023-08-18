import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import SliederSlide from "./SliderSlide";
import { SliderSlideProps } from "../types";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import ArrowRightIcon from "../CustomIcons/ArrowIcon";

interface SliderProps {
  slides: SliderSlideProps[];
  effect: string;
  arrowNavigation?: boolean;
  heroSlider?: boolean;
  gameSlider?: boolean;
  feedbackSlider?: boolean;
  title: string;
  breackpoints: any;
  categorySliderI18?: any;
}

const Slider = ({
  slides,
  arrowNavigation,
  effect,
  heroSlider,
  gameSlider,
  feedbackSlider,
  title,
  breackpoints,
  categorySliderI18,
}: SliderProps) => {
  return (
    <section
      className={` ${
        feedbackSlider &&
        "lg:bg-bg lg:p-10 lg:max-w-[1696px] lg:mx-auto lg:rounded-2xl"
      }`}
    >
      <img
        className={` ${
          feedbackSlider ? "hidden lg:block lg:mx-auto" : "visually-hidden"
        }`}
        src={process.env.PUBLIC_URL + title}
        alt="title"
      />
      <Swiper
        className={`max-w-[390px] h-auto relative lg:mb-0
                  ${heroSlider && "lg:max-w-[1900px]"}
                  ${
                    gameSlider &&
                    "lg:max-w-[1696px] lg:mt-8 lg:px-5 lg:bg-bg rounded-2xl"
                  }
                  ${
                    feedbackSlider &&
                    "lg:max-w-[1696px] lg:mt-8 lg:bg-bg rounded-2xl"
                  }`}
        effect={effect}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={
          arrowNavigation
            ? {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }
            : false
        }
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        breakpoints={breackpoints}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <SliederSlide
              {...slide}
              gameSlider={gameSlider}
              heroSlider={heroSlider}
              feedbackSlider={feedbackSlider}
              i={i}
            />
          </SwiperSlide>
        ))}
        {arrowNavigation && (
          <>
            <div
              className="absolute left-7 bottom-2 z-10 rotate-180 transform swiper-prev
                            lg:left-[23%] lg:bottom-[50%] cursor-pointer"
            >
              <ArrowRightIcon />
            </div>
            <div
              className="absolute right-7 bottom-2 z-10 transform swiper-next
                            lg:right-[23%] lg:bottom-[50%] cursor-pointer"
            >
              <ArrowRightIcon />
            </div>
          </>
        )}
      </Swiper>
    </section>
  );
};

export default Slider;
