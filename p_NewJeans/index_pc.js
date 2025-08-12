import { app } from "./js/app.js";
import { folder } from "./js/folder.js";
import { pc_gallery } from "./js/pc_gallery.js";
import { appData } from "./js/appData.js";

window.addEventListener("load", () => {
  folder();
  app();

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


  //  ------------------------------


  // thumnail형 갤러리 ------------------------------

  pc_gallery('supernatural');

  const appFolder = document.querySelectorAll(".folder");

  const albumTitles = {
    bubblegum: "Bubble_Gum",
    howsweet: "How_Sweet",
    supernatural: "Supernatural",
  };

  appFolder.forEach((folder) => {
    folder.addEventListener("click", () => {
      const albumName = folder.getAttribute("data-album");
      if (albumName) {
        document.querySelector(".folder_title").textContent = albumTitles[albumName] || albumName;
        pc_gallery(albumName);
        document.getElementById("folder").classList.add("on");
      }
    });
  });
});
