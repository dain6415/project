// 변수 선언(let같은 애들)
const container = document.querySelector("section.container");
const articles = document.querySelectorAll("section.container article");
const frame = document.querySelector("section.frame"); //하단 영역
const scene = document.querySelector(".scene"); //불러들일 파일을 공간

/****************** hover 이벤트*/
articles.forEach((article) => {
  const h2 = article.querySelector("h2");

  article.addEventListener("mouseenter", function () {
    this.classList.add("on");
    const intro = document.querySelector(".intro img");
    const introText = document.querySelector(".intro .txt");

    intro.style.display = "none";

    const bg = article.dataset.bg;
    this.classList.add("on");

    container.style.backgroundImage = `url(${bg})`;
  });

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
        const pTxt = document.querySelector(".up");
        // console.log(h3Element);

        if (h3Element) {
          // 딜레이 0.1초에 아래를 실행해
          setTimeout(() => {
            h3Element.classList.add("on");
          }, 100);
        }
        if (prtImg) {
          // 딜레이 0.4초에 이미지를 불러와
          setTimeout(() => {
            prtImg.classList.add("on");
          }, 400);
        }
        if (pTxt) {
          // 딜레이 0.6초에 글자를 불러와
          setTimeout(() => {
            pTxt.classList.add("on");
          }, 600);
        }

        document.body.style.overflowY = "auto";
      });
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    document.body.style.overflowY = "hidden";
    frame.style.top = "100%";
  }
});
