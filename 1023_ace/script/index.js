var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const prevButtons = document.querySelectorAll(".swiper-button-prev");
const nextButtons = document.querySelectorAll(".swiper-button-next");

prevButtons.forEach((prev) => {
  prev.addEventListener("mouseover", function () {
    this.querySelector("path").setAttribute(
      "d",
      "M 40 10 Q 10 65 40 140"
    );
  });

  prev.addEventListener("mouseout", function () {
    this.querySelector("path").setAttribute(
      "d",
      "M 40 10 Q 40 65 40 140"
    );
  });
});

nextButtons.forEach((next) => {
  next.addEventListener("mouseover", function () {
    this.querySelector("path").setAttribute(
      "d",
      "M 10 10 Q 40 65 10 140"
    );
  });

  next.addEventListener("mouseout", function () {
    this.querySelector("path").setAttribute(
      "d",
      "M 10 10 Q 10 65 10 140"
    );
  });
});