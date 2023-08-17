export const feedbaks = [
  {
    id: "1",
    img: "/imgs/feedback/person1.png",
    about: `Це найкраще місце де можна відпочити та забути про всі негаразди. Час минає швидко, 
        а головне, всі задоволені, 
        тому що часто граємо всією сімʼєю!`,
    fullName: "Степан Бандера",
    job: "Стоматолог",
  },
  {
    id: "2",
    img: "/imgs/feedback/person2.png",
    about: `Дуже класний сервіс, кажу як дизайнер! Все дуже зручно, а саме головне - ігри крутезні!  Це те місце, де ви не пожалкуєте ні однієї витраченої хвилини!`,
    fullName: "Аміар Мурад",
    job: "Дизайнер",
  },
  {
    id: "3",
    img: "/imgs/feedback/person3.png",
    about: `Найкраща платформа, яку я відкрив для себе за останній рік! Не знаєте як провести вільний час? Це підходяще місце! Ще і розвиває логіку та памʼять!`,
    fullName: "Андрій Вітинський",
    job: "Студент",
  },
];

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
