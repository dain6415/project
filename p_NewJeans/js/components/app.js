import { pc_gallery } from "./pc_gallery.js";
import { pc_mv } from "./pc_mv.js";
import { pc_list } from "./pc_list.js";
import { appData } from "../data/appData.js";

export function app() {
  const folderView = document.getElementById("folder");
  const folderTitle = document.querySelector(".folder_title");

  const appBtns = document.querySelectorAll(".desktop_app button");

  const folderTitles = {
    mv: "MV",
    streaming: "Streaming",
    bubblegum: "BubbleGum",
    howsweet: "HowSweet",
    supernatural: "Supernatural",
  };

  appBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      folderView.classList.add("on");

      const folderLi = btn.closest(".folder");

      const folderName = folderLi?.dataset.album || folderLi?.id;

      folderTitle.textContent = folderTitles[folderName] || folderName;

      if (btn.classList.contains("gallery")) {
        pc_gallery(folderName, appData.albums, "gallery");  // 타입 전달
      } else if (btn.classList.contains("video")) {
        pc_mv(folderName, appData.mv, "video");            // 타입 전달
      } else if (btn.classList.contains("list")) {
        pc_list(folderName, appData.streaming, "list");    // 타입 전달
      }
    });
  });
}
