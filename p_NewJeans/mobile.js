import { appData } from "./js/data/appData.js";
import { mobile_gallery } from "./js/components/mobile_gallery.js";
import { playList } from "./js/components/playList.js";
import { backBtn } from "./js/components/backBtn.js";

window.addEventListener("load", () => {
  playList();

  const loading = document.getElementById("loading");
  const bar = document.getElementById("loading_bar");
  const text = document.querySelector(".loading_text");

  let progress = 0;
  const interval = setInterval(() => {
    progress++;
    bar.style.width = progress + "%";
    text.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      loading.classList.add("hidden");
    }
  }, 25);
  
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
