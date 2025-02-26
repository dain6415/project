 // lenis------------------------------------
 const lenis = new Lenis({
  smooth: true,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 헤더------------------------------------
let lastScrollY = 0;
const header = document.querySelector("header");
const mobBtn = document.querySelector(".mobile_box");
const mobileNav = document.querySelector(".mobile_nav");

window.addEventListener("scroll", function () {
  if (!mobileNav.classList.contains("on")) {
    // 모바일 메뉴가 열려있지 않을 때만 실행
    if (window.scrollY > lastScrollY) {
      header.style.top = "-100%";
    } else {
      header.style.top = "0";
    }
  }
  lastScrollY = window.scrollY;
});

mobBtn.addEventListener("click", function () {
  mobBtn.classList.toggle("on");
  mobileNav.classList.toggle("on");

  if (mobileNav.classList.contains("on")) {
    header.style.top = "0"; // 모바일 메뉴가 열려 있으면 헤더 고정
  }
});

// ----------------------------------------------------
const today = new Date().getDay();
const schedule = {
  // 요일별 영업시간
  1: "휴무 (매주 월요일)",
  // 2: "10:00 - 20:00까지",
  2: "10:00 - 21:00 (서울문화의 밤 1시간 연장 운영)",
  3: "10:00 - 20:00까지",
  4: "10:00 - 20:00까지",
  5: "10:00 - 20:00 (금요일 서울문화의 밤 1시간 연장 운영)",
  6: "10:00 - 19:00 (주말/공휴일 운영)",
  0: "10:00 - 19:00 (주말/공휴일 운영)",
};

document.getElementById("museum_status").textContent = schedule[today];

// swiper----------------------------------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 4,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    // clickable: true,
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  loop: true,
  //       oopedSlides: 3, // 루프 시 복사되는 슬라이드 개수 지정
  // centeredSlides: true,
});
