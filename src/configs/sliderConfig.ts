export const heroSliderBreackpoints = {
  390: {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 80,
    initialSlide: 1,
  },
  1920: {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 50,
    initialSlide: 1,
    centeredSlides: true,
  },
};

export const categorySliderBreackpoints = {
  390: {
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 1,
    initialSlide: 0,
    navigation: false,
  },
  1920: {
    grabCursor: true,
    slidesPerView: 14.3,
    spaceBetween: 0,
    initialSlide: 0,
    navigation: false,
  },
};

export const feedbackSliderBreackpoints = {
  390: {
    effect: "slide",
    grabCursor: true,
    slidesPerView: 1.5,
    spaceBetween: 8,
    initialSlide: 0,
  },
  1920: {
    effect: "slide",
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 8,
    initialSlide: 0,
  },
};
