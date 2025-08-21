import { appData } from "./js/data/appData.js";
import { mobile_gallery } from "./js/components/mobile_gallery.js";
import { backBtn } from "./js/components/backBtn.js";

window.addEventListener("load", () => {
  // time ------------------------------
  function getTime() {
    const clock = document.getElementById("clock");

    const time = new Date();
    let hour = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");

    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;

    clock.innerHTML = hour + ":" + minutes;
  }
  getTime();
  setInterval(getTime, 1000);

  const appBtns = document.querySelectorAll(".folder .app");
  const contents = document.querySelector(".contents");

// 음악재생
const playList = document.querySelectorAll("audio");
let playing = false;
let nowPlaying = 0;

const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");
const pauseBtn = document.querySelector(".pause");
const nextBtn = document.querySelector(".next");

const btnList = [playBtn, pauseBtn, stopBtn];

const getCurrentAudio = () => playList[nowPlaying];

function setBtnImage(btn, isActive) {
  const img = btn.querySelector("img");
  if (!img) return;

  let src = img.getAttribute("src");

  if (isActive) {
    if (!src.includes("_in")) {
      img.setAttribute("src", src.replace(".svg", "_in.svg"));
    }
  } else {
    if (src.includes("_in")) {
      img.setAttribute("src", src.replace("_in", ""));
    }
  }
}

function updateActiveBtn(targetBtn) {
  btnList.forEach((btn) => setBtnImage(btn, btn === targetBtn));
}

playBtn.addEventListener("click", () => {
  const audio = getCurrentAudio();
  if (!playing) {
    audio.play();
    playing = true;
  }
  updateActiveBtn(playBtn);
});

pauseBtn.addEventListener("click", () => {
  const audio = getCurrentAudio();
  if (playing) {
    audio.pause();
    playing = false;
  }
  updateActiveBtn(pauseBtn);
});

stopBtn.addEventListener("click", () => {
  const audio = getCurrentAudio();
  audio.pause();
  audio.currentTime = 0;
  playing = false;
  updateActiveBtn(stopBtn);
});

nextBtn.addEventListener("click", () => {
  const current = getCurrentAudio();
  current.pause();
  current.currentTime = 0;

  nowPlaying = (nowPlaying + 1) % playList.length;
  const nextAudio = getCurrentAudio();
  nextAudio.play();
  playing = true;

  document.querySelector(".song").textContent =
    nowPlaying === 0 ? "Supernatural" : "Right Now";

  updateActiveBtn(playBtn);
});


//------------------------------------------
  appBtns.forEach((btn) => {
    const parentId = btn.closest("li").id;

    btn.addEventListener("click", () => {
      contents.classList.add("on");

      switch (parentId) {
        case "mv":
          contents.classList.add("mv");
          fetch("./page/mv.html")
            .then((res) => res.text())
            .then((html) => {
              document.getElementById("list_wrap").innerHTML = html;
            });
          break;

          case "gallery":
            contents.classList.add("gallery");
            fetch("./page/gallery.html")
              .then((res) => res.text())
              .then((html) => {
                document.getElementById("list_wrap").innerHTML = html;
          
                const galleryContainer = document.getElementById("gallery_container");
                const appContent = document.querySelector(".app_content");
                const backBtn = document.querySelector(".back");
          
                if (galleryContainer) galleryContainer.hidden = true;
          
                // 갤러리 버튼들 클릭 이벤트
                document.querySelectorAll("[data-gallery]").forEach((btn) => {
                  btn.addEventListener("click", () => {
                    const name = btn.dataset.gallery;
                    mobile_gallery(name);
                  });
                });
          
                if (backBtn) {
                  backBtn.addEventListener("click", () => {
                    galleryContainer.hidden = true;
                    appContent.hidden = false;
                  });
                }
              });
            break;
          
      }
    });
  });
  
  const homeBtn = document.getElementById("homeBtn");
  homeBtn.addEventListener("click", () => {
    contents.classList.remove("on");
  });
});
