const sect5Tabs = document.querySelectorAll(".contents-list li");
sect5Tabs.forEach((tabMenu) => {
  tabMenu.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

// review, news
const mySwiper2 = new Swiper(".mySwiper2", {
  // slidesPerView: 1,
  // spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    641: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

//  photo, video
const mySwiper3 = new Swiper(".mySwiper3", {
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    568: {
      slidesPerView: 1,
      loop:false,
      spaceBetween: 30,
    },
    641: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid:false,
    },
    1000: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
  },
  // autoHeight: true, // 자동 높이 계산
});
