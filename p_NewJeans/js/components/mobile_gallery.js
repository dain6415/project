import { appData } from "../data/appData.js";

export function mobile_gallery(folderName) {
  const galleryImgs = appData.albums[folderName] || [];
  console.log("갤러리 데이터 확인:", folderName, galleryImgs);

  const appContent = document.querySelector(".app_content");
  const galleryContainer = document.getElementById("gallery_container");
  const photoList = document.getElementById("photo_list");

  appContent.hidden = true;
  galleryContainer.hidden = false;

  const modal = document.querySelector(".modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modal_img");
  const download = document.getElementById("download");
  const closeBtn = document.getElementById("close");

  let currentIndex = 0;
  let firstFocus, lastFocus;

  function setFocusTrapElements() {
    const tabFocus = modal.querySelectorAll(`
      a[href], area[href], input:not([disabled]), select:not([disabled]),
      textarea:not([disabled]), button:not([disabled]), iframe, object, embed,
      *[tabindex]:not([tabindex="-1"]), *[contenteditable]
    `);
    firstFocus = tabFocus[0];
    lastFocus = tabFocus[tabFocus.length - 1];
  }

  function renderGallery(list) {
    photoList.innerHTML = "";
    list.forEach((imgObj, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.classList.add("img_box");
      btn.setAttribute("role", "listitem");

      const img = document.createElement("img");
      img.src = imgObj.src;
      img.loading = "lazy";
      img.dataset.index = i;
      img.alt = imgObj.alt;

      btn.appendChild(img);
      li.appendChild(btn);
      photoList.appendChild(li);

      btn.addEventListener("click", () => openModal(i));
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(i);
        }
      });
    });
  }

  function updateView(index) {
    currentIndex = index;
    const imgData = galleryImgs[index];
    modalImg.src = imgData.src;
    modalImg.alt = imgData.alt || "";
    download.href = imgData.src;
    download.setAttribute("download", imgData.src.split("/").pop());
  }

  function openModal(index) {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-modal", "true");
    updateView(index);
    setFocusTrapElements();
    if (firstFocus) firstFocus.focus();
  }

  function hideModal() {
    modal.classList.add("hidden");
    modalImg.src = "";
    modal.setAttribute("aria-modal", "false");
  }

  function showPrevImage() {
    if (currentIndex > 0) updateView(currentIndex - 1);
  }

  function showNextImage() {
    if (currentIndex < galleryImgs.length - 1) updateView(currentIndex + 1);
  }

  closeBtn.addEventListener("click", hideModal);

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("hidden")) return;

    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === firstFocus) {
        e.preventDefault();
        lastFocus.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocus) {
        e.preventDefault();
        firstFocus.focus();
      }
    } else if (e.key === "ArrowLeft") {
      showPrevImage();
    } else if (e.key === "ArrowRight") {
      showNextImage();
    } else if (e.key === "Escape") {
      hideModal();
    }
  });

  // 스와이프형식 -----------
  let startX = 0;

  modal.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  modal.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      showNextImage();
    } else if (endX - startX > 50) {
      showPrevImage();
    }
  });

  renderGallery(galleryImgs);
  appContent.hidden = false;
  galleryContainer.hidden = false;
}
