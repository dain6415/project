// 헤더 호버하면 이미지 변경
const header = document.querySelector("header");
const img = document.querySelector("header h1 img");
const menu = document.querySelector('li.btn span')

header.addEventListener("mouseover", function () {
  img.src = "./img/logo_black.png";
  // menu.style.background = "#000"
});

header.addEventListener("mouseout", function () {
  img.src = "./img/logo.png";
  // menu.style.background = "#fff"
});


// 반응형 피시버전 메뉴
$("nav ul li.main-menu").mouseenter(function () {
  $(this).find("ul.sub-menu").stop().fadeIn(200);
});
$("nav ul li.main-menu").mouseleave(function () {
  $(this).find("ul.sub-menu").stop().fadeOut(200);
});


// 반응형 폰 버전 메뉴
$("li.main-menu").click(function () {
  if (window.innerWidth <= 1000){
    let $this = $(this);
    let $smenu = $this.find(".s-menu");
  
    if ($this.hasClass("on")) {
      $this.removeClass("on").css("background", "");
      $smenu.slideUp();
    } else {
      $("li.main-menu").removeClass("on").css("background", "");
      $(".s-menu").slideUp();
  
      $(this).addClass("on").css("background", "#e2475c");
      $smenu.slideDown();
    }
  }
});

$("li.btn").click(function () {
  $(".sitemap-box")
    .css({ opacity: 0, right: "0" })
    .animate({ opacity: 1, right: "0" }, 100);
});
$(".close-map-btn").click(function () {
  $(".sitemap-box")
    .css({ opacity: 0, right: "-100%" })
    .animate({ right: "-100%" }, 100);
});