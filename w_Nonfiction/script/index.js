//header------------------------
let lastScrollY = 0; // 마지막 스크롤 위치
const header = document.querySelector("header");
const logoImg = document.querySelector("h1 a img");
const navLi = document.querySelectorAll("nav ul li a");
const memberIcon = document.querySelectorAll(".member ul li svg");
// mobile ver
const mobLogo = document.querySelector("svg.mob_logo");
const hamburger = document.querySelector(".hamburger");

window.addEventListener("scroll", function () {
  // 배너때문에
  if (window.scrollY > 30) {
    header.style.top = "0";
  } else {
    header.style.top = "30px";
  }

  // 스크롤 위치가 100 이상이면 배경 추가, 아니면 투명
  if (window.scrollY > 100) {
    header.style.background = "#fff";
    logoImg.setAttribute("src", "./img/logo.png");
    navLi.forEach((i) => {
      i.style.color = "#333";
    });
    memberIcon.forEach((i) => {
      i.style.stroke = "#333";
    });
    mobLogo.style.fill = "#333";
    hamburger.classList.add('hover');
  } else {
    header.style.background = "transparent";
    logoImg.setAttribute("src", "./img/logo-w.png");
    navLi.forEach((item) => {
      item.style.color = "#fff";
    });
    memberIcon.forEach((item) => {
      item.style.stroke = "#fff";
    });
    mobLogo.style.fill = "#fff";
    hamburger.classList.remove('hover');
  }

  lastScrollY = window.scrollY;
});
// 헤더 호버 시 스타일 변경
header.addEventListener("mouseenter", () => {
  header.style.background = "#fff";
  logoImg.setAttribute("src", "./img/logo.png");
  navLi.forEach((item) => {
    item.style.color = "#333";
  });
  memberIcon.forEach((item) => {
    item.style.stroke = "#333";
  });
  mobLogo.style.fill = "#333";
  hamburger.classList.add('hover');
});

// 헤더에서 마우스를 뗐을 때 스타일 원래대로
header.addEventListener("mouseleave", () => {
  if (window.scrollY <= 100) {
    header.style.background = "transparent";
    logoImg.setAttribute("src", "./img/logo-w.png");
    navLi.forEach((item) => {
      item.style.color = "#fff";
    });
    memberIcon.forEach((item) => {
      item.style.stroke = "#fff";
    });
    mobLogo.style.fill = "#fff";
    hamburger.classList.remove('hover');
  }
});


// mobile menu-------------------------------------
$(".mobiledisplay").click(function () {
  $(this).toggleClass("on");
  $(".mobile_menu").toggleClass("on");

  if ($(".mobile_menu").hasClass("on")) {
    // 모바일 메뉴가 열렸을 때 스타일 변경
    $("header").css("background", "#fff");
    $("h1 a img").attr("src", "./img/logo.png");
    $(".member ul li svg").css("stroke", "#333");
    $("svg.mob_logo").css("fill", "#333");
    $(".hamburger").addClass("hover");
    $("body").css("overflow","hidden");
  }else{
    $("body").css("overflow","auto");
  }
});


$(".main_menu > a").click(function(e){
  e.preventDefault();
  if (window.innerWidth <= 1000){
    let $this = $(this).parent();
    let $smenu = $this.find(".sub_menu");
  
    if ($this.hasClass("on")) {
      $this.removeClass("on");
      $smenu.slideUp();
    } else {
      $(".main_menu").removeClass("on");
      $(".sub_menu").slideUp();
  
      $this.addClass("on");
      $smenu.slideDown();
    }
  }
  $(".sub_menu a").click(function (e) {
    e.stopPropagation();
  });
})



// swiper-------------------------------------
let swiperInstance;

function initSwiper() {
  if (window.innerWidth <= 720) {
    if (!swiperInstance) {
      swiperInstance = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      });
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(); // Swiper 제거
      swiperInstance = null;
    }
  }
}

initSwiper();
window.addEventListener("resize", initSwiper);
