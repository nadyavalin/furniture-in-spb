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
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1179: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Slider for the review block
var swiper = new Swiper(".review__swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-review-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow-review-next",
    prevEl: ".arrow-review-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    760: {
      slidesPerView: 1.6,
      spaceBetween: 40,
    },
    1179: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// Аккордеон
// Получаем все элементы аккордеона
const accordions = document.querySelectorAll(".accordion");

// Добавляем обработчик клика для каждой секции аккордеона
accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");

  // Скрываем/показываем содержимое при клике на заголовок
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    content.classList.toggle("active");
  });
});

// Бургер-меню
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const container = document.querySelector(".container");

  document.getElementById("burger").addEventListener("click", function () {
    setTimeout(() => {
      header.classList.toggle("open");
      container.classList.toggle("open");
    }, 0);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      header.classList.remove("open");
      container.classList.remove("open");
    }
  });

  document.body.addEventListener("click", (event) => {
    if (
      !event.target.classList.contains("nav") &&
      !event.target.closest(".burger") &&
      header.classList.contains("open") &&
      container.classList.contains("open")
    ) {
      header.classList.remove("open");
      container.classList.remove("open");
    }
  });
});

// Phone
// пока не работает
var cleave = new Cleave("form__tel", {
  phone: true,
  phoneRegionCode: "{country}",
});
