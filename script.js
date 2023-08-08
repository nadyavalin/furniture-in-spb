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
});

// Аккордеон
// Получаем все элементы аккордеона
const accordions = document.querySelectorAll('.accordion');

// Добавляем обработчик клика для каждой секции аккордеона
accordions.forEach((accordion) => {
	const header = accordion.querySelector('.accordion-header');
	const content = accordion.querySelector('.accordion-content');

  // Скрываем/показываем содержимое при клике на заголовок
	header.addEventListener('click', () => {
		header.classList.toggle('active');
    content.classList.toggle('active');
	});
});

// Phone
// пока не работает
var cleave = new Cleave('form__tel', {
  phone: true,
  phoneRegionCode: '{country}'
});