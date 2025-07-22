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

  const isLight = document.body.getAttribute("data-theme") === "light";
  const headerLogo = document.querySelector("h1 a img");

  if (mobileNav.classList.contains("on") && isLight) {
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
console.log(schedule[today]);

// swiper----------------------------------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 4,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
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
});

var collSwiper = new Swiper(".coll", {
  on: {
    slideChange: function () {
      const activeIndex = this.realIndex;
      document.querySelectorAll(".text_container .text").forEach((el, idx) => {
        el.classList.toggle("on", idx === activeIndex);
      });
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const collSwiperWrapper = document.querySelector(".coll .swiper-wrapper");

collSwiperWrapper.addEventListener("mouseenter", () => {
  collSwiperWrapper.style.cursor = "grab";
});
collSwiperWrapper.addEventListener("mousedown", () => {
  collSwiperWrapper.style.cursor = "grabbing";
});
window.addEventListener("mouseup", () => {
  collSwiperWrapper.style.cursor = "grab";
});

// isLight모드---------------------------------------------
const checkbox = document.querySelector("#modeToggle");
const modeChange = document.querySelector(".mode_change");
const blind = modeChange.querySelector(".blind");
const darkModeIcon = document.querySelectorAll(".mode_change .dark_mode");
const lightModeIcon = document.querySelectorAll(".mode_change .light_mode");
const main = document.querySelector("main");

checkbox.addEventListener("click", (e) => {
  const isLight = !e.target.checked;
  document.body.setAttribute("data-theme", isLight ? "light" : "dark");

  const footerLogo = document.querySelector(".f_logo .img_box img");
  const footerSns = document.querySelectorAll(".sns a img");

  footerLogo.setAttribute(
    "src",
    isLight ? "./imgs/logo-b.png" : "./imgs/logo-w.png"
  );
  footerSns.forEach((img) => {
    img.style.filter = isLight ? "invert(0)" : "invert(1)";
  });

  darkModeIcon.forEach((icon) => {
    icon.classList.toggle("on", isLight);
  });
  lightModeIcon.forEach((icon) => {
    icon.classList.toggle("on", !isLight);
  });

  blind.textContent = isLight ? "다크 모드로 전환" : "라이트 모드로 전환";
});

window.addEventListener("scroll", () => {
  const mainBottom = main.getBoundingClientRect().bottom;

  const viewportHeight = window.innerHeight;

  if (mainBottom <= viewportHeight) {
    modeChange.classList.add("on");
  } else {
    modeChange.classList.remove("on");
  }
});
