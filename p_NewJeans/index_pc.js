import { appData } from "./js/data/appData.js";
import { appFolder } from "./js/components/appFolder.js";
import { playList } from "./js/components/playList.js";
import { gallery } from "./js/components/gallery.js";
import { pc_list } from "./js/components/pc_list.js";

window.addEventListener("load", () => {
  appFolder();
  playList();

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

  gallery('supernatural', appData.albums);
  pc_list("streaming", appData.streaming);
});
