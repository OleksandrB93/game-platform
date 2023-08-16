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
  effect?: string;
  grabCursor?: boolean;
  centeredSlides?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  initialSlide?: number;
  arrowNavigation: boolean;
  heroSlider?: boolean;
  gameSlider?: boolean;
  title: string;
}

const Slider = ({
  slides,
  arrowNavigation,
  effect,
  centeredSlides,
  slidesPerView,
  spaceBetween,
  initialSlide,
  heroSlider,
  gameSlider,
  title,
}: SliderProps) => {
  return (
    <div>
      <h2 className="visually-hidden">{title}</h2>
      <Swiper
        className="max-w-[390px] h-auto  mb-4 relative"
        effect={effect}
        grabCursor={true}
        centeredSlides={centeredSlides}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        initialSlide={initialSlide}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
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
        // pagination={{ type: "bullets", clickable: true, dynamicBullets: true }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SliederSlide
              {...slide}
              gameSlider={gameSlider}
              heroSlider={heroSlider}
            />
          </SwiperSlide>
        ))}
        {arrowNavigation && (
          <>
            <div className="absolute left-7 bottom-2 z-10 rotate-180 transform swiper-prev">
              <ArrowRightIcon />
            </div>
            <div className="absolute right-7 bottom-2 z-10 transform swiper-next">
              <ArrowRightIcon />
            </div>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
