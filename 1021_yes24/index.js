// <!-- header -->
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let textElems = document.querySelectorAll("header li a");
  let headerImages = document.querySelectorAll("header img");
  let menuLine = document.querySelector(".menu");

  // 원래 src 주소
  const originalImages = [
    "./img/pf-logoN-w.png",
    "./img/pf-srch.png",
    "./img/pf-ticket-w.png",
    "./img/pf-global-w.png",
  ];
  // 변경할 주소
  const newImages = [
    "./img/pf-logoN.png",
    "./img/pf-srch-w.png",
    "./img/pf-ticket-b.png",
    "./img/pf-global-b.png",
  ];

  if (window.scrollY > 550) {
    header.style.position = "fixed";
    header.style.width = "100%";

    // 배경색을 투명하게 설정 (내려갔을 때)
    header.style.backgroundColor = "white";
    header.style.borderBottom = "1px solid #ddd";
    header.style.top = "0";

    textElems.forEach(function (text) {
      text.style.color = "#333"; // 텍스트 색상 변경
    });

    // 새로운 이미지 주소
    headerImages.forEach(function (img, index) {
      img.src = newImages[index];
    });

    menuLine.style.color = "black";
  } else {
    header.style.position = "fixed";

    // 기본 배경색 설정 (흰색)
    header.style.backgroundColor = "transparent";
    header.style.borderBottom = "none";
    textElems.forEach(function (text) {
      text.style.color = "#fff";
    });

    // 원래 이미지
    headerImages.forEach(function (img, index) {
      img.src = originalImages[index];
    });
    menuLine.style.color = "#fff";
  }
});
// -------------------------------------------------------------------------------------------


// menu-open submenu, up down
$('ul.snb-menu1 li.main-menu').mouseenter(function () {
  $(this).find('ul.sub-menu').stop().slideDown();
});

$('ul.snb-menu1 li.main-menu').mouseleave(function () {
  $(this).find('ul.sub-menu').stop().slideUp();
});

// swiper
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween:50, /* gap주기!!! */
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
// ++스크롤
$(".scrollbar").mCustomScrollbar();

// $('.close').click(function(){
//   $('.snb').fadeOut()
// })
$('.menu').click(function () {
  $('.snb').animate({ left: '0' }, 800); // 왼쪽으로 슬라이드되어 나타남
});

$('.close').click(function () {
  $('.snb').animate({ left: '-100%' }, 1000); // 다시 왼쪽으로 슬라이드되어 사라짐
});
// -------------------------------------------------------------------------------------------



  /* <!-- Initialize Swiper --> */
var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  speed: 300,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

const liElems = document.querySelectorAll(".slide-menu ul li");
// console.log(liElems)
//모든 li를 대상으로~  각각 li요소
liElems.forEach(function (liElem, idx) {
  // console.log(liElems, idx);
  //각각 li
  liElem.addEventListener("click", function (e) {
    e.preventDefault();
    // 모든 li
    liElems.forEach(function (item) {
      item.classList.remove("on");
    });
    // 각각 활성화
    liElem.classList.add("on");
    swiper.slideToLoop(idx, 100);
  });
});

swiper.on("slideChange", function () {
  let activeIdx = swiper.realIndex;

  liElems.forEach(function (item) {
    item.classList.remove("on");
  });
  liElems[activeIdx].classList.add("on");
});

// <!-- sect4 tab -->
//"ul.product li a의 링크를 찾아서 aElems에 변수 저장
const aElems = document.querySelectorAll(".s4-menu ul li");
// console.log(aElems);
aElems.forEach(function (anchor) {
  //링크가 클릭되면 그때 실행할 함수를 지정
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    aElems.forEach(function (a) {
      a.classList.remove("on");
    });
    this.classList.add("on");
    let href = this.getAttribute("href");
    // alert(href)

    //모든 article 태그를 찾아서, 각각에 대해 작업할 준비
    document.querySelectorAll("article").forEach(function (art) {
      art.classList.remove("on");
    });

    //href 값에 해당하는 특정 article 태그를 찾아서, 그곳에 on 클래스를 추가
    document.querySelector(href).classList.add("on");
    //뭐가 있을 것 같은데....
  });
});
// -------------------------------------------------------------------------------------------

const tabs = document.querySelectorAll(".sect6 ul li");

// 열려있는 tab을 기억하는 변수
let activeTab = tabs[0];
openTab(activeTab);

tabs.forEach((tab) => {
  tab.querySelector(".tit").addEventListener("mouseenter", function () {
    const parentTab = tab; // 클릭한 title의 부모 요소
    openTab(parentTab); // 클릭한 타이틀을 열기

    if (activeTab && activeTab !== parentTab) {
      closeTab(activeTab); // 열려있는 tab 닫기
    }

    activeTab = parentTab; // 현재 열린 탭 기억
  });
});

function openTab(tab) {
  const desc = tab.querySelector(".desc");
  const imgbox = tab.querySelector(".imgbox"); // 이미지박스 선택
  const img = tab.querySelector(".imgbox img"); // 이미지 태그 선택

  tab.classList.add("on");
  desc.style.maxHeight = desc.scrollHeight + "px";
  desc.style.opacity = 1;

  // 이미지박스와 이미지에 스타일 적용
  if (imgbox && img) {
    imgbox.style.maxHeight = "100px"; // 원하는 크기로 변경
    imgbox.style.opacity = 1;
    img.style.maxHeight = "100px";
    img.style.opacity = 1;
  }
}

function closeTab(tab) {
  const desc = tab.querySelector(".desc");
  const imgbox = tab.querySelector(".imgbox"); // 이미지박스 선택
  const img = tab.querySelector(".imgbox img"); // 이미지 태그 선택

  tab.classList.remove("on");
  desc.style.maxHeight = 0;
  desc.style.opacity = 0;

  // 이미지박스와 이미지에 스타일 초기화
  if (imgbox && img) {
    imgbox.style.maxHeight = "0";
    imgbox.style.opacity = 0;
    img.style.maxHeight = "0";
    img.style.opacity = 0;
  }
}
// -------------------------------------------------------------------------------------------

// <!-- sect7 -->
var s7Slide = document.querySelectorAll(".sect7 .swiper-wrapper .swiper-slide");

var sect7Swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 슬라이드 변경 시 'on' 클래스 적용
sect7Swiper.on("slideChange", function () {
  let activeIdx = sect7Swiper.realIndex; // 실제 인덱스 기반으로 처리

  // 모든 li에서 'on' 클래스 제거
  s7Slide.forEach(function (item) {
    item.classList.remove("on");
  });

  // 활성화된 슬라이드에 해당하는 li에 'on' 클래스 추가
  s7Slide[activeIdx].classList.add("on");
});
