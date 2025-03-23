// 변수 선언(let같은 애들)
const container = document.querySelector("section.container");
const articles = document.querySelectorAll("section.container article");
const frame = document.querySelector("section.frame"); //하단 영역
const scene = document.querySelector(".scene"); //불러들일 파일을 공간

/****************** hover 이벤트*/
articles.forEach((article, idx) => {
  const h2 = article.querySelector("h2");

  article.addEventListener("mouseenter", function () {
    this.classList.add("on");
    // const video = document.querySelector("video");
    const intro = document.querySelector(".intro img");
    const introText = document.querySelector(".intro p");
    
    intro.style.display = "none";
    introText.style.display = "none";

    const bg = article.dataset.bg;
    this.classList.add("on");

    container.style.backgroundImage = `url(${bg})`;
    // splitext(h2);
    // mouseUp(h2);
  });

  //h2 나타나기 안나타나긴데 나는 필요가 없음
  // article.addEventListener("mouseleave", function () {
  //   // img.classList.remove('on');
  //   this.classList.remove("on");
  //   resetText(h2);
  // });

  /****************** click 이벤트*/
  article.addEventListener("click", function (e) {
    e.preventDefault();

    // 아티클을 누르면 해당 섹션의 아티클 정보를 가져와
    const href = this.querySelector("a").getAttribute("href");
    frame.style.top = 0;

    //fetch api 자료 불러오기
    fetch(href)
      .then((res) => res.text())
      .then((data) => {
        scene.innerHTML = data;

        // 정보를 가져오고 난 후에 아래를 실행해라
        const h3Element = document.querySelector(".fade-up");
        const prtImg = document.querySelector(".prt");
        const pup = document.querySelector(".up");
        // console.log(h3Element);

        if (h3Element) {
          // 딜레이 0.1초에 아래를 실행해
          setTimeout(() => {
            h3Element.classList.add("on");
          }, 100);
        }
        if (prtImg) {
          // 딜레이 0.1초에 아래를 실행해
          setTimeout(() => {
            prtImg.classList.add("on");
          }, 250);
        }
        if (pup) {
          // 딜레이 0.1초에 아래를 실행해
          setTimeout(() => {
            pup.classList.add("on");
          }, 550);
        }

        document.body.style.overflowY = "auto";
      });
  });
});

/****************** click 이벤트*/
// document.querySelectorAll("button a").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     frame.styel.top = 0;

//     //fetch api 자료 불러오기
//     // fetch(href)
//     //   .then((res) => res.text())
//     //   .then((data) => {
//     //     scene.innerHTML = data;
//     //   });
//     document.body.style.overflowY = "auto";
//   });
// });

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    document.body.style.overflowY = "hidden";
    // frame.classList.remove('on');
    frame.style.top = "100%";
  }
});

//h2 글자 나누기
// function splitext(el) {
//   const txt = el.innerText;
//   let tag = "";
//   txt.split("").forEach((letter) => {
//     tag += `<span>${letter}</span>`;
//   });
//   el.innerHTML = tag;
// }

// function mouseUp(el) {
//   const spans = el.querySelectorAll("span");
//   spans.forEach((span, i) => {
//     span.style.transitionDelay = "${i*.05}s";
//     span.style.transform = "translateY(0)";
//     span.style.opacity = "1";
//   });
// }

function resetText(el) {
  const spans = el.querySelectorAll("span");
  spans.forEach((span, i) => {
    span.style.transform = "translateY(0)";
    span.style.opacity = "0";
  });
}
