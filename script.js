// Slider for the first block
var slider = new Swiper(".intro__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".arrow-slide-next",
    prevEl: ".arrow-slide-prev",
  },
});

// Slider for the third block
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

// Phone
// пока не работает
var cleave = new Cleave('form__tel', {
  phone: true,
  phoneRegionCode: '{country}'
});