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

window.addEventListener("load", () => {
  requestAnimationFrame(logoChange);
});
window.addEventListener("scroll", logoChange);
window.addEventListener("resize", logoChange);
mobBtn.addEventListener("click", function () {
  mobBtn.classList.toggle("on");
  mobileNav.classList.toggle("on");

  if (mobileNav.classList.contains("on")) {
    header.style.top = "0";
  }
  logoChange();
});

const h1Logo = document.querySelector("h1");
const headerLogo = document.querySelector(".first_logo");
const headerLogoChange = document.querySelector(".logo_change");

function logoChange() {
  const rootColor = getComputedStyle(document.body);
  const isLight = document.body.getAttribute("data-theme") === "light";
  const scrollY = window.scrollY;
  const isMobileMenuOpen = mobileNav.classList.contains("on");

  const changeSrc = isLight ? "./imgs/logo-b.png" : "./imgs/logo-w.png";
  const nav = document.querySelectorAll('nav a');

  // 모바일 메뉴 열려 있을 때
  if (isMobileMenuOpen) {
    headerLogo.style.display = 'none';
    headerLogoChange.style.display = 'block';
    if (headerLogoChange.getAttribute("src") !== changeSrc) {
      headerLogoChange.setAttribute("src", changeSrc);
    }
    return;
  } else {
    headerLogo.style.display = 'block';
    headerLogoChange.style.display = 'none';
  }

  if (scrollY > 100) {
    const headerBg = rootColor.getPropertyValue("--color-gray700").trim();
    const navColor = rootColor.getPropertyValue("--color-gray200").trim();
    const headerBorderBottom = rootColor.getPropertyValue("--color-gray500").trim();


    header.style.background = headerBg;
    header.style.borderBottom = `1px solid ${headerBorderBottom}`;
    headerLogo.style.display = 'none';
    headerLogoChange.style.display = 'block';
    
    nav.forEach((link) => {
      link.style.color = navColor;
    });
    
    if (headerLogoChange.getAttribute("src") !== changeSrc) {
      headerLogoChange.setAttribute("src", changeSrc);
    }
  } else {
    header.style.background = "none";
    header.style.borderBottom = "none";
    headerLogo.style.display = 'block';
    headerLogoChange.style.display = 'none';

    nav.forEach((link) => {
      link.style.color = "#333";
    });
  }
}

// ----------------------------------------------------
const today = new Date().getDay();
const schedule = {
  1: "휴무 (매주 월요일)",
  2: "10:00 AM - 21:00 PM",
  3: "10:00 AM - 20:00 PM",
  4: "10:00 AM - 20:00 PM",
  5: "10:00 AM - 20:00 PM",
  6: "10:00 AM - 19:00 PM",
  0: "10:00 AM - 19:00 PM",
};

const museumStatusEl = document.getElementById("museum_status");
museumStatusEl.innerHTML = schedule[today].replace(/\n/g, "<br>");
// museumStatusEl.style.color = "#f7f7f7";
console.log(schedule[today]);

// swiper----------------------------------------
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 4,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    draggable: true,
  },
  navigation: {
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper .swiper-button-prev",
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
