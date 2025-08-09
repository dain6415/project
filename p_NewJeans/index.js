import { mv } from "./script/mv.js";
import { gallery } from "./script/gallery.js";
import { goods } from "./script/goods.js";

window.addEventListener("DOMContentLoaded", function () {
  const loading = document.getElementById("loding");
  const mainContent = document.querySelector("main");
  const loadingBar = document.getElementById("loding_bar");
  const loadingText = document.querySelector(".loding_text");

  let percent = 0;

  document.body.classList.add("no_scroll");

  const loadingInterval = this.setInterval(() => {
    percent++;
    loadingBar.style.width = percent + "%";
    loadingText.textContent = "..." + percent + "%";

    if(percent >= 100) {
      clearInterval(loadingInterval);

      setTimeout(() => {
        loading.style.display = "none";
        mainContent.style.display = "block";
        document.body.classList.remove("no_scroll");
      }, 300);
    }
  }, 50);

  mv();
  gallery();
  goods();

  const buttons = document.querySelectorAll("nav button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;

      document.querySelectorAll(".tab_content").forEach((div) => {
        div.classList.toggle("on", div.dataset.tab === tabName);
      });

      buttons.forEach((b) => b.classList.remove("on"));
      btn.classList.add("on");
    });
  });

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

  const playList = document.querySelectorAll("audio");
  let nowPlaying = 0;
  let playing = false;

  const playBtn = document.querySelector(".play");
  const pauseBtn = document.querySelector(".pause");
  const stopBtn = document.querySelector(".stop");
  const nextBtn = document.querySelector(".next");

  const btnList = [playBtn, pauseBtn, stopBtn];

  const getCurrentAudio = () => playList[nowPlaying];

  function setButtonImage(btn, isActive) {
    const img = btn.querySelector("img");
    if (!img) return;

    let src = img.getAttribute("src");

    if (isActive) {
      if (!src.includes("_bg")) {
        img.setAttribute("src", src.replace(".svg", "_bg.svg"));
      }
    } else {
      if (src.includes("_bg")) {
        img.setAttribute("src", src.replace("_bg", ""));
      }
    }
  }

  function updateActiveButton(targetBtn) {
    btnList.forEach((btn) => setButtonImage(btn, btn === targetBtn));
  }

  playBtn.addEventListener("click", () => {
    const audio = getCurrentAudio();
    if (!playing) {
      audio.play();
      playing = true;
    }
    updateActiveButton(playBtn);
  });

  pauseBtn.addEventListener("click", () => {
    const audio = getCurrentAudio();
    if (playing) {
      audio.pause();
      playing = false;
    }
    updateActiveButton(pauseBtn);
  });

  stopBtn.addEventListener("click", () => {
    const audio = getCurrentAudio();
    audio.pause();
    audio.currentTime = 0;
    playing = false;
    updateActiveButton(stopBtn);
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

    updateActiveButton(playBtn);
  });
});
