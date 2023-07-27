var swiper = new Swiper(".catalog__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev",
    },
});

var slider = new Swiper(".intro__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".arrow-slide-next",
    prevEl: ".arrow-slide-prev",
  },
});