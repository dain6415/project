import { appData } from "./js/data/appData.js";
// import { appFolder } from "./js/components/appFolder.js";
// import { pc_gallery } from "./js/components/pc_gallery.js";

window.addEventListener("load", () => {
  const appBtns = document.querySelectorAll(".folder .app");

  appBtns.forEach((btn) => {
    const parentId = btn.closest("li").id;

    btn.addEventListener("click", () => {
      const contents = document.querySelector(".contents");
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

        case "streaming":
          contents.classList.add("streaming");
          fetch("./page/streaming.html")
            .then((res) => res.text())
            .then((html) => {
              document.getElementById("list_wrap").innerHTML = html;
            });
          break;

        case "gallery":
          fetch("./page/gallery.html")
            .then((res) => res.text())
            .then((html) => {
              document.getElementById("list_wrap").innerHTML = html;
              pc_mv("gallery", appData.gallery); // 갤러리 데이터 출력
            });
          break;

        default:
          console.log("외부링크 앱 (goods, phoning)은 fetch 없음");
      }
    });
  });

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
});
