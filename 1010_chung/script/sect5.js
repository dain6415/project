const sect5Tabs = document.querySelectorAll(".contents-list li");
sect5Tabs.forEach((tabMenu) => {
  tabMenu.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

//  photo, video
const mySwiper3 = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  // spaceBetween: 30,
  breakpoints: {
    641: {
      slidesPerView: 4,
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
  }
});

// review, news
const mySwiper2 = new Swiper(".mySwiper2", {
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

