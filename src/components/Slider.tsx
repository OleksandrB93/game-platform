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
  disableCoverFlow?: boolean;
}

const Slider = ({ slides, disableCoverFlow }: SliderProps) => {
  return (
    <div>
      <Swiper
        className="w-[390px] mb-4 mt-12  relative"
        effect={disableCoverFlow ? "slide" : "coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={50}
        initialSlide={1}
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
        // navigation={true}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        // pagination={{ type: "bullets", clickable: true, dynamicBullets: true }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SliederSlide {...slide} width={slide.width} />
          </SwiperSlide>
        ))}
        <div className="absolute left-7 bottom-2  z-10 rotate-180 transform swiper-prev">
          <ArrowRightIcon />
        </div>
        <div className="absolute right-7  bottom-2  z-10 transform  swiper-next">
          <ArrowRightIcon />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
