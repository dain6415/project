import { pc_gallery } from "./pc_gallery.js";
import { pc_mv } from "./pc_mv.js";
import { pc_list } from "./pc_list.js";
import { appData } from "../data/appData.js";

export function appFolder() {
  const appBtns = document.querySelectorAll(".desktop_app button");
  const folderView = document.getElementById("folder");
  const folderTitle = document.getElementById("folderTitle");


  const folderTitles = {
    mv: "MV",
    streaming: "Streaming",
    bubblegum: "BubbleGum",
    howsweet: "HowSweet",
    supernatural: "Supernatural",
  };

  let lastFocusBtn;

  appBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      lastFocusBtn = btn;

      folderView.classList.add("on");
      folderView.setAttribute("aria-hidden", "false");

      folderView.querySelector("button")?.focus();

      const folderLi = btn.closest(".folder");
      const folderName = folderLi?.dataset.album || folderLi?.id;

      folderTitle.textContent = folderTitles[folderName] || folderName;

      if (btn.classList.contains("gallery")) {
        pc_gallery(folderName, appData.albums, "gallery");
      } else if (btn.classList.contains("video")) {
        pc_mv(folderName, appData.mv, "video");
      } else if (btn.classList.contains("list")) {
        pc_list(folderName, appData.streaming, "list");
      };

      
    });
  });

  // 닫기
  const closeImage = document.querySelector(".close_btn img");

  closeImage.addEventListener("mouseenter", () => {
    closeImage.setAttribute("src", "./img/icon/close_in.svg");
  });
  closeImage.addEventListener("mouseleave", () => {
    closeImage.setAttribute("src", "./img/icon/close.svg");
  });

  const closeBtn = document.querySelector(".close_btn");
  closeBtn.addEventListener("click", () => {
    folderView.classList.remove("on");
    folderView.setAttribute("aria-hidden", "true");
    // lastFocusBtn?.focus();
  });
}
