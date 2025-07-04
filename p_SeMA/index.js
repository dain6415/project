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
    header.style.top = "0";
  }

  const isDark = document.body.getAttribute("data-theme") === "dark";
  const headerLogo = document.querySelector("h1 a img");

  if (mobileNav.classList.contains("on") && isDark) {
    headerLogo.setAttribute("src", "./imgs/logo-w.png");
  } else {
    headerLogo.setAttribute("src", "./imgs/logo-b.png");
  }
});

// ----------------------------------------------------
const today = new Date().getDay();
const schedule = {
  1: "휴무 (매주 월요일)",
  2: "10:00 - 21:00",
  3: "10:00 - 20:00까지",
  4: "10:00 - 20:00까지",
  5: "10:00 - 20:00",
  6: "10:00 - 19:00",
  0: "10:00 - 19:00",
};

const msg = schedule[today].replace(/\n/g, "<br>");
document.getElementById("museum_status").innerHTML = msg;
console.log(schedule[today])

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
// dark모드---------------------------------------------
const checkbox = document.querySelector("#modeToggle");
const label = document.querySelector(".mode_change");
const blind = label.querySelector(".blind");
const darkModeIcon = document.querySelectorAll(".mode_change .dark_mode");
const lightModeIcon = document.querySelectorAll(".mode_change .light_mode");

checkbox.addEventListener("click", (e) => {
  const isDark = !e.target.checked;
  document.body.setAttribute("data-theme", isDark ? "dark" : "light");

  const footerLogo = document.querySelector(".f_logo .img_box img");
  const footerSns = document.querySelectorAll(".sns a img");

  footerLogo.setAttribute(
    "src",
    isDark ? "./imgs/logo-w.png" : "./imgs/logo-b.png"
  );
  footerSns.forEach((img) => {
    img.style.filter = isDark ? "invert(1)" : "invert(0)";
  });

  darkModeIcon.forEach((icon) => {
    icon.classList.toggle("on", !isDark);
  });
  lightModeIcon.forEach((icon) => {
    icon.classList.toggle("on", isDark);
  });

  blind.textContent = isDark ? "라이트 모드로 전환" : "라이트 모드로 전환";
});

window.addEventListener('scroll', () => {
  const modeChange = document.querySelector('.mode_change');
  const scrollY = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollY + windowHeight >= docHeight - 100) {
    modeChange.style.bottom = '192px';
  } else {
    modeChange.style.bottom = '20px';
  }
});