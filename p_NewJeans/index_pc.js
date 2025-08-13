import { appData } from "./js/data/appData.js";
import { folder } from "./js/components/folder.js";
import { app } from "./js/components/app.js";
import { pc_gallery } from "./js/components/pc_gallery.js";
import { pc_list } from "./js/components/pc_list.js";

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

  const container = document.getElementById("list_wrap");
  pc_gallery('supernatural', appData.albums);
  pc_list("streaming", appData.streaming);
});
