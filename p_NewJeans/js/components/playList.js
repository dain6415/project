export function playList(){
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
}