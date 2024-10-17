var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// review
var swiper2 = new Swiper(".mySwiper2", {
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

//  photo
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween:5,
          grid: {
            rows: 2,
          },
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
          grid: {
            rows: 2,
          },
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },
        },
      },
  
});