var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    641: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});


var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});