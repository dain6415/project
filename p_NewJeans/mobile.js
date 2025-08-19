import { appData } from "./js/data/appData.js";
// import { appFolder } from "./js/components/appFolder.js";
// import { pc_gallery } from "./js/components/pc_gallery.js";

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
              pc_mv("gallery", appData.gallery); // 갤러리 데이터 출력
            });
          break;

        default:
          console.log("외부링크 앱 (goods, phoning)은 fetch 없음");
      }
    });
  });

  const homeBtn = document.querySelector(".home");
  homeBtn.addEventListener("click", () => {
    contents.classList.remove("on");
  });
});
