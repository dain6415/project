import { mv } from "./mv.js";
import { gallery } from "./gallery.js";
import { goods } from "./goods.js";

window.addEventListener("DOMContentLoaded", function () {
  mv();
  gallery();
  goods();

  const buttons = document.querySelectorAll("nav button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;

      // 해당 탭 콘텐츠 보여주기
      document.querySelectorAll(".tab_content").forEach((div) => {
        div.classList.toggle("on", div.dataset.tab === tabName);
      });

      // 버튼 상태도 업데이트
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
  let currentBtn = null;
  
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
  

    if (isActive && !src.includes("_bg")) {
      img.setAttribute("src", src.replace(".svg", "_bg.svg"));
    }

    if (!isActive && src.includes("_bg")) {
      img.setAttribute("src", src.replace("_bg", ""));
    }
  }
  
  function updateActiveButton(targetBtn) {
    btnList.forEach((btn) => setButtonImage(btn, btn === targetBtn));
    currentBtn = targetBtn;
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
  
    document.querySelector(".song").textContent = nowPlaying === 0 ? "Supernatural" : "Right Now";
  
    updateActiveButton(playBtn);
  });
  
});
