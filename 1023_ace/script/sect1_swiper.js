var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 10 65 40 140");
});
prev.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 40 65 40 140");
});

next.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 40 65 10 140");
});
next.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 10 65 10 140");
});