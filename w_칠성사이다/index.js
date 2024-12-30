$('nav').mouseenter(function(){
  $("ul.sub").stop().slideDown(300)
  $('header').addClass('on')
})
$('nav').mouseleave(function(){
  $("ul.sub").stop().slideUp(200)
  $('header').removeClass('on')
})

// <!-- header + section 투명도 -->
// Y축의 위치값을 구하라
let prevScrollTop = 0;
let header = document.querySelector("header");

const sectionElems = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  let currentScrollTop = window.pageYOffset;

  //현재보다 아래로 내려가면 header가 안 보이고
  if (currentScrollTop > prevScrollTop) {
    //스크롤을 아래로 내릴 때
    header.style.top = "-100px";
  } else {
    header.style.top = 0;
  }

  //위로 올리면 header 보이기
  //현재 스크롤 위치를 이전 스크롤값에 저장한다
  prevScrollTop = currentScrollTop;

  // ---------------------------------------------------
  sectionElems.forEach(function (section) {
    const sticky = section.querySelector(".sticky");
    const sectionTop = section.offsetTop; //각 섹션의 시작위치 구하기
    // console.log(sectionTop)
    const threshold = sectionTop + 300; //각 섹션에서 얼마나 떨어지면(아래로 내려가면-)

    //sticky가 존재하면 실행해줘
    if (sticky) {
      if (currentScrollTop > threshold) {
        sticky.style.opacity = "0";
      } else {
        sticky.style.opacity = "1";
      }
    } else {
    }
  });
});

// <!-- sect1 -->
//slide
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

//우담라이팅이 베이슨데 이름이나 상황이 달라서 바꿔주기----------------------------------------
var swiper1 = new Swiper(".mySwiper", {
  speed: 1000, //변환속도 지정
  loop: true, //루프로 돌아가지만 깨져서 1번 돌면 이상해짐
  autoplay: {
    //반복
    delay: 2500,
    disableOnInteraction: false,
  },
});

const liElems = document.querySelectorAll("ul.paging-menu li");

// 슬라이드를 autoplay 상황에서 몇번째를 보이고 있는 건지 확인
swiper1.on("slideChange", function () {
  //해당 번째 인덱스값을 get
  let activeIdx = swiper1.realIndex;

  liElems.forEach(function (item) {
    item.classList.remove("on");
  });
  liElems[activeIdx].classList.add("on");
});

// console.log(liElems)
//모든 li를 대상으로~  각각 li요소
liElems.forEach(function (liElem, idx) {
  // console.log(liElems, idx);

  //클릭했을 때 - 각각 li
  liElem.addEventListener("click", function (e) {
    e.preventDefault();

    // 모든 li -
    liElems.forEach(function (item) {
      item.classList.remove("on");
    });
    // 각각 활성화
    liElem.classList.add("on");
    //그래서 slideToLoop가 나옴 그럼 깨지던 루프가 정상적으로 됨
    swiper1.slideToLoop(idx, 500);
  });
});

// play 버튼 스탑 = '토글'로----------------------------
let sw = 0;
document.querySelector("a.pause").addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("active");
  sw = this.classList.contains("active"); //active 클래스가 존재
  if (sw) {
    swiper1.autoplay.stop();
  } else {
    swiper1.autoplay.start();
  }
});

// 다음으로 갔다 전으로 갔다 하하하하-------------------------------------------------
document.querySelector("a.prev").addEventListener("click", function (e) {
  e.preventDefault();
  swiper1.slidePrev();
});
document.querySelector("a.next").addEventListener("click", function (e) {
  e.preventDefault();
  swiper1.slideNext();
});

// <!-- sect3 tab -->
$(".product_menu li a").click(function (e) {
  e.preventDefault();
  let href = $(this).attr("href");

  $(".product_menu li a").removeClass("on");
  $(this).addClass("on");

  $("article").removeClass("on");
  $(href).addClass("on");

  //--------------------------------------------------------
  dotAni($(this));
});
function animateElements(target) {
  const elements = $(target).find(".tit, .name, .txt, .btnA, .img1, .img2");
  let delay = 0;

  elements.each(function () {
    const el = $(this);
    setTimeout(() => {
      el.css("opacity", 1);
      el.css("transform", "translateY(0px)");
    }, delay);
    delay += 1200; // 요소 간 300ms의 간격
  });
}

//.dot가 사이다 위에서 시작하게
dotAni($(".product_menu li a").first());

//
$(window).resize(function () {
  dotAni($(".product_menu li a").first());
});

//.dot 움직이기
function dotAni(active) {
  let left = $(active).offset().left;
  let wid = $(active).width() / 2;
  $(".dot")
    .stop()
    .animate({ left: left + wid - 5 });
}

// sect4
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const s4Slide = document.querySelectorAll(".swiper-pagination ul li");

// 슬라이드를 autoplay 상황에서 몇 번째를 보이고 있는지 확인
swiper2.on("slideChange", function () {
  // 해당 슬라이드의 인덱스를 가져옴
  let activeIdx = swiper2.realIndex;

  // 모든 슬라이드에서 "on" 클래스 제거
  s4Slide.forEach(function (item) {
    item.classList.remove("on");
  });

  // 현재 활성화된 슬라이드에 "on" 클래스 추가
  if (s4Slide[activeIdx]) { // 해당 인덱스가 존재하는지 확인
    s4Slide[activeIdx].classList.add("on");
  }
});


s4Slide.forEach(function (liElem, idx) {
  // console.log(liElems, idx);

  //클릭했을 때 - 각각 li
  liElem.addEventListener("click", function (e) {
    e.preventDefault();

    // 모든 li -
    s4Slide.forEach(function (item) {
      item.classList.remove("on");
    });
    // 각각 활성화
    liElem.classList.add("on");
    //그래서 slideToLoop가 나옴 그럼 깨지던 루프가 정상적으로 됨
    swiper1.slideToLoop(idx, 500);
  });
});


// up
document.querySelector('.up').addEventListener('click',function(e){
  e.preventDefault()
  window.scrollTo({top:0,behavior:'smooth'})
})

//footer
$('#snsLink').click(function (e) {
  e.preventDefault(); // 기본 동작 방지

  const container = $('.links_container');

  // active 클래스 토글
  if (container.hasClass('on')) {
    container.removeClass('on'); // 닫기
  } else {
    container.addClass('on'); // 열기
  }
});
$('#famLink').click(function (e) {
  e.preventDefault(); // 기본 동작 방지

  const container = $('.family_list');

  // active 클래스 토글
  if (container.hasClass('on')) {
    container.removeClass('on'); // 닫기
  } else {
    container.addClass('on'); // 열기
  }
});


const plusBanner = document.querySelector('.floating-banner')

plusBanner.addEventListener('click', function(){
  plusBanner.classList.toggle('on')
})