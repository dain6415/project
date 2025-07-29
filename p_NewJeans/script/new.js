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

  const playBtn = document.querySelector(".play");
  const stopBtn = document.querySelector(".stop");
  const pauseBtn = document.querySelector(".pause");
  const nextBtn = document.querySelector(".next");

  const getCurrentAudio = () => playList[nowPlaying];

playBtn.addEventListener('click', () => {
  const audio = getCurrentAudio();
  if (!playing) {
    audio.play().
    playing = true;
  }
});

pauseBtn.addEventListener('click', () => {
  const audio = getCurrentAudio();
  if (playing) {
    audio.pause();
    playing = false;
  }
});

stopBtn.addEventListener('click', () => {
  const audio = getCurrentAudio();
  audio.pause();
  audio.currentTime = 0;
  playing = false;
});

nextBtn.addEventListener('click', () => {
  const current = getCurrentAudio();
  current.pause();
  current.currentTime = 0;

  nowPlaying = (nowPlaying + 1) % playList.length;
  const next = getCurrentAudio();
  next.play();
  playing = true;

  const title = nowPlaying === 0 ? "Supernatural" : "Right Now";
  document.querySelector(".song").textContent = title;
});
});
