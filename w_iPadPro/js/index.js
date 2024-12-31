//loding + sect1
// document.addEventListener("DOMContentLoaded", () => {
//   const loding = document.getElementById("loding_screen");
//   const mainContents = document.querySelector("main");

//   const video = document.querySelector("video");
//   const title = document.querySelector(".title");
//   const buy = document.querySelector(".buy");

//   document.body.style.overflow = "hidden";

//   setTimeout(() => {
//     console.log("로딩 화면 종료 시작");
//     loding.style.opacity = "1";
//     loding.style.transition = "opacity 0.3s";

//     setTimeout(() => {
//       loding.style.display = "none";
//       document.body.style.overflow = "auto";
//       mainContents.style.display = "block";

//       console.log("로딩 화면 종료 완료, 영상 준비 중");

//       title.style.opacity = "0";
//       title.style.top = "25%";
//       buy.style.opacity = "0";
//       buy.style.bottom = "25%";

//       video.addEventListener("loadeddata", () => {
//         video.play();
//       });
//       setTimeout(() => {
//         title.style.transition = ".75s ease";
//         buy.style.transition = ".75s ease";

//         title.style.opacity = "1";
//         title.style.top = "22%";
//         buy.style.opacity = "1";
//         buy.style.bottom = "28%";
//       }, 3000);
//     }, 3000);
//   }, 3000);

//   function startAnimation() {
//     title.style.transition = ".75s ease";
//     buy.style.transition = ".75s ease";

//     title.style.opacity = "1";
//     title.style.top = "22%";
//     buy.style.opacity = "1";
//     buy.style.bottom = "28%";
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");
  const title = document.querySelector(".title");
  const buy = document.querySelector(".buy");

  // 초기 상태 설정
  title.style.opacity = "0";
  title.style.top = "25%";
  buy.style.opacity = "0";
  buy.style.bottom = "25%";

  // 비디오 로드 후 재생
  video.addEventListener("loadeddata", () => {
    video.play();
    video.playbackRate = 1.5;
  });

  // 애니메이션 시작
  setTimeout(() => {
    title.style.transition = ".75s ease";
    buy.style.transition = ".75s ease";

    title.style.opacity = "1";
    title.style.top = "22%";
    buy.style.opacity = "1";
    buy.style.bottom = "28%";
  }, 3000);
});
// 스크롤을 내렸다가 올라와도 다시 실행(반복)
// window.addEventListener("scroll", () => {
//   const videoBox = document.querySelector(".video_box");
//   const videoBoxRect = videoBox.getBoundingClientRect();

//   if (videoBoxRect.top <= window.innerHeight && videoBoxRect.bottom >= 0) {
//     // 영상 재생
//     if (video.paused) {
//       video.play();
//     }

//     // 타이틀과 구매 버튼 나타나게 하기
//     if (title.style.opacity === "0" && buy.style.opacity === "0") {
//       startAnimation();
//     }
//   } else {
//     // 영상이 화면을 벗어나면 멈추기
//     if (!video.paused) {
//       video.pause();
//     }

//     // 타이틀과 구매 버튼 숨기기
//     title.style.opacity = "0";
//     buy.style.opacity = "0";
//   }
// });

// --------------------------------------------------------------------------

//sect2
const hover = document.querySelectorAll(".sect2 .accodion ul li");

let currentIndex = 0;
let isHovering = false; // 호버 플래그 활성화 상태

// 순차적으로 클래스 추가 함수
function addClassSequentially() {
  if (!isHovering) {
    hover.forEach((el) => el.classList.remove("on"));
    hover[currentIndex].classList.add("on");

    const video = hover[currentIndex].querySelector(".accodion_video video");
    if (video) {
      setTimeout(() => {
        video.play();
      }, 500);
    }
    currentIndex = (currentIndex + 1) % hover.length;
  }
  setTimeout(addClassSequentially, 3500);
}

// IntersectionObserver를 이용하여 sect2 섹션에 도달했을 때 실행
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // sect2가 화면에 들어오면 addClassSequentially 실행
        addClassSequentially();
        observer.disconnect(); // 한 번 실행되면 옵저버를 종료
      }
    });
  },
  { threshold: 0.5 }
); // sect2의 50%가 화면에 보일 때 트리거

// sect2를 옵저버에 추가, 없으면 실행이 안되는 듯?
const sect2 = document.querySelector(".sect2");
observer.observe(sect2);

// 마우스 호버 이벤트 추가
hover.forEach((item, index) => {
  item.addEventListener("mouseenter", function () {
    isHovering = true; // 호버 중단
    hover.forEach((el) => el.classList.remove("on"));
    item.classList.add("on");
    currentIndex = (index + 1) % hover.length;
    const video = item.querySelector(".accodion_video video");
    if (video) {
      setTimeout(() => {
        video.play();
      }, 500);
    }
  });

  item.addEventListener("mouseleave", function () {
    isHovering = false; // 호버 해제 시 자동 순환 재개
    const video = item.querySelector(".accodion_video video");
    if (video) {
      video.currentTime = 0;
      video.pause();
    }
  });
});

// --------------------------------------------------------------------------

//sect3
const tabMenuItems = document.querySelectorAll(".color_tab_menu li");

const spaceGrayTab = document.querySelector(".space_gray");
const silverTab = document.querySelector(".silver");

//tab_menu
tabMenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabMenuItems.forEach((tab) => tab.classList.remove("on"));
    item.classList.add("on");

    if (index === 0) {
      spaceGrayTab.style.display = "block"; // 첫 번째 탭 보이기
      silverTab.style.display = "none";
    } else {
      silverTab.style.display = "none";
      silverTab.style.display = "block";
    }
  });
});
// --------------------------------------------------------------------------

//sect5
const m4zoom = gsap.timeline();

m4zoom.to(".scrolltrigger2 svg", { scale: 1 });

ScrollTrigger.create({
  animation: m4zoom,
  trigger: ".sect5",
  start: "top",
  end: "+=2300",
  anticipatePin: 1,
  pin: true, // 1보단 true..그래야 작동해..ㅠ
  scrub: true,
  // markers: true,
});

gsap.fromTo(
  ".explanation",
  { marginTop: "0px" }, // 초기 상태
  {
    marginTop: "-10px", // 최종 상태
    scrollTrigger: {
      trigger: ".sect5",
      start: "top+=1", // 섹션 시작 후 어느 정도 스크롤 이후에 실행
      end: "top+=50",
      scrub: true,
      // markers: true,
    },
  }
);

gsap.fromTo(
  ".explanation .info",
  { opacity: 0 }, // 초기 상태
  {
    opacity: 1,
    marginTop: "-150px", // 최종 상태
    scrollTrigger: {
      trigger: ".sect5",
      start: "top+=10",
      end: "top+=100",
      scrub: true,
      // markers: true,
    },
  }
);

// --------------------------------------------------------------------------
