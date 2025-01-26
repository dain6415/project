// header
let lastScrollY = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    header.style.top = "0";
  } else if (window.scrollY > lastScrollY) {
    header.style.top = "-100%";
  } else {
    header.style.top = "0";
  }
  lastScrollY = window.scrollY;
});

// nav------------------------
const mainMenu = document.querySelectorAll("ul.pc_menu li.main-menu");
const subMenus = document.querySelectorAll(
  "ul.pc_menu li.main-menu ul.sub-menu"
);

mainMenu.forEach((mainMenu) => {
  mainMenu.addEventListener("mouseenter", function () {
    header.classList.add("hover");
  });
  mainMenu.addEventListener("mouseleave", function () {
    header.classList.remove("hover");
  });
});

mainMenu.forEach(function (mainMenu) {
  mainMenu.addEventListener("mouseenter", function () {
    subMenus.forEach(function (subMenu) {
      subMenu.style.display = "block";
    });
  });

  mainMenu.addEventListener("mouseleave", function () {
    subMenus.forEach(function (subMenu) {
      subMenu.style.display = "none";
    });
  });
});
// ----------------------------------------------------------------------------------------
// arrow_Btn's
const prev = document.querySelectorAll(".arrow_prev");
const next = document.querySelectorAll(".arrow_next");

prev.forEach((arrow) => {
  arrow.addEventListener("mouseenter", function () {
    const path = this.querySelector("path");
    console.log(path); // path가 잘 선택되는지 확인
    path.setAttribute("d", "M 40 10 Q 10 65 40 140");
  });
  arrow.addEventListener("mouseleave", function () {
    const path = this.querySelector("path");
    path.setAttribute("d", "M 40 10 Q 40 65 40 140");
  });
});

next.forEach((arrow) => {
  arrow.addEventListener("mouseenter", function () {
    const path = this.querySelector("path");
    path.setAttribute("d", "M 10 10 Q 40 65 10 140");
  });
  arrow.addEventListener("mouseleave", function () {
    const path = this.querySelector("path");
    path.setAttribute("d", "M 10 10 Q 10 65 10 140");
  });
});
// ----------------------------------------------------------------------------------------
// sect1
var swiperIntro = new Swiper(".sect1 .intro", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  pagination: {
    el: ".swiper-pagination.not_pc",
    clickable: true,
  },
});
// ----------------------------------------------------------------------------------------
// sect2
var Swiper2pc = new Swiper(".pcSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".arrow_next",
    prevEl: ".arrow_prev",
  },
  on: {
    slideChange: function () {
      // console.log("현재 활성 슬라이드 인덱스:", this.realIndex);

      const activeIndex = this.realIndex;

      // 모든 탭과 텍스트 초기화
      tabs.forEach((t) => t.classList.remove("on"));
      txts.forEach((txt) => txt.classList.remove("on"));

      // 현재 활성 슬라이드에 해당하는 탭과 텍스트에 "on" 클래스 추가
      tabs[activeIndex].classList.add("on");
      txts[activeIndex].classList.add("on");
    },
  },
});

// tab
const tabs = document.querySelectorAll(".swiper-pagination.tab li");
const txts = document.querySelectorAll(".txt .summary");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    tabs.forEach((t) => t.classList.remove("on"));
    txts.forEach((txt) => txt.classList.remove("on"));

    tab.classList.add("on");
    txts[index].classList.add("on");

    Swiper2pc.slideTo(index);
  });
});

// --phone+tablet
var swiper2 = new Swiper(".sect2 .swiper_p_t > .smallSwiper", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination.not_pc",
    clickable: true,
  },
});

// ----------------------------------------------------------------------------------------
// sect3
// COLLECTION swiper  ----------------------------------------
var swiperWeb = new Swiper(".sect3 .web", {
  slidesPerView: 1,
  spaceBetween: 50,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
  on: {
    init: function () {
      // 초기 상태 설정
      setSlideOpacity(this);
    },
    slideChange: function () {
      setSlideOpacity(this);
    },
  },
});
function setSlideOpacity(swiper) {
  swiper.slides.forEach((slide, index) => {
    if (index === swiper.activeIndex) {
      slide.classList.add("on");
    } else {
      slide.classList.remove("on");
    }
  });
}

const colTab = document.querySelectorAll(".col_tab li");
const product = document.querySelectorAll(".prod");

colTab.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    colTab.forEach((t) => t.classList.remove("on"));
    product.forEach((product) => product.classList.remove("on"));

    tab.classList.add("on");
    product[index].classList.add("on");
    // product[index].classList.remove('off');
  });
});

// news swiper ----------------------------------------
var swiper = new Swiper(".sect3 .news .swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
  // 스와이프 할때 해당 인덱스 표시하기
  on: {
    slideChange: function () {
      const activeIndex = this.realIndex;
      updateTabs(activeIndex);
    },
  },
});
const newsTabs = document.querySelectorAll(".news .swiper_tab p");

// 탭 클릭
newsTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    newsTabs.forEach((t) => t.classList.remove("on"));

    tab.classList.add("on");
    swiper.slideTo(index);
  });
});

// 탭 업데이트 함수 정의
function updateTabs(activeIndex) {
  newsTabs.forEach((t) => t.classList.remove("on"));

  newsTabs[activeIndex].classList.add("on");
}
// ----------------------------------------------------------------------------------------
// footer
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const openBox = document.querySelector(".open_box");
open.addEventListener("click", function (e) {
  e.preventDefault();
  openBox.classList.add("on");
});
close.addEventListener("click", function (e) {
  e.preventDefault();
  openBox.classList.remove("on");
});
// ----------------------------------------------------------------------------------------
// 기타
// 맨 위로 + 투명도
const topBtn = document.querySelector(".topBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    topBtn.style.opacity = "1";
    topBtn.style.pointerEvents = "auto";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.pointerEvents = "none";
  }
});

// 따로 실행되는 코드이기 때문에 따로 작성
// 위 코드는 스크롤시 발행하는 이벤트이기 때문에 클릭 이벤트와는 충돌할
topBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//site_btn------------------------------
const siteBtn = document.querySelector(".site_btn");
const main = document.querySelector("main");
window.addEventListener("scroll", () => {
  const mainBottom = main.getBoundingClientRect().bottom;

  const viewportHeight = window.innerHeight;

  if (mainBottom <= viewportHeight) {
    // `main`의 끝이 viewport에 닿았을 때
    siteBtn.classList.add("on");
  } else {
    // `main`의 끝에서 떨어졌을 때
    siteBtn.classList.remove("on");
  }
});

//quick_area --------------------------------
const openQuick = document.querySelector(".open_quick");
const closeQuick = document.querySelector(".quick_close");
const quickArea = document.querySelector(".quick_area");
const quickBg = document.querySelector(".quick_area_open_bg");

openQuick.addEventListener("click", function (e) {
  e.preventDefault();
  quickArea.classList.add("on");
  quickBg.classList.add("on");
});
closeQuick.addEventListener("click", function (e) {
  e.preventDefault();
  quickArea.classList.remove("on");
  quickBg.classList.remove("on");
});
