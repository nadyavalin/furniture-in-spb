var swiper = new Swiper(".catalog__swiper", {
    slidesPerView: 6,
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