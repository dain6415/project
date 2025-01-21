var swiper3 = new Swiper(".pcSwiper", {
  // slidesPerView: 1,
  // centeredSlides: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
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
    swiper.slideTo(index);
    txts[index].classList.add("on");
  });
});

swiper.on("slideChange", function () {
  const activeIndex = swiper.realIndex; // 현재 활성화된 슬라이드 인덱스

  // 모든 탭과 텍스트 초기화
  tabs.forEach((t) => t.classList.remove("on"));
  txts.forEach((txt) => txt.classList.remove("on"));

  // 현재 활성 슬라이드에 해당하는 탭과 텍스트에 "on" 클래스 추가
  tabs[activeIndex].classList.add("on");
  txts[activeIndex].classList.add("on");
});

const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");

prev2.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 10 65 40 140");
});
prev2.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 40 65 40 140");
});

next2.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 40 65 10 140");
});
next2.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 10 65 10 140");
});

// --phone+tablet
var swiper2 = new Swiper(".swiper_p_t > .swiper", {
spaceBetween: 0,
pagination: {
el: ".swiper-pagination.not_pc",
clickable: true,
},
});