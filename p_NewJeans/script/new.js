import { mv } from "./mv.js";
import { gallery } from "./gallery.js";
import { goods } from "./goods.js";

window.addEventListener("load", function () {
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

  
  function getTime(){
    const clock = document.getElementById('clock');

    const time = new Date();
    let hour = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");

    hour = hour % 12;
    hour = hour === 0 ? 12 : hour; 
    
    clock.innerHTML = hour + ":" + minutes;
  }

  getTime();
  setInterval(getTime, 1000);
});
