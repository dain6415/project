import { appData } from "../data/appData.js";

export function mobile_gallery(folderName) {
  const galleryImgs = appData.albums[folderName] || [];
  const appContent = document.querySelector(".app_content");
  const galleryContainer = document.getElementById("gallery_container");
  const photoList = document.getElementById("photo_list");

  const modal = document.querySelector(".modal");
  const swiperWrapper = modal.querySelector(".swiper-wrapper");
  const download = document.getElementById("download");
  const closeBtn = document.getElementById("close");

  let firstFocus, lastFocus;

  const modalSwiper = new Swiper(".swiper", {
    loop: false,
  });

  modalSwiper.on("slideChange", () => {
    const activeSlide = modalSwiper.slides[modalSwiper.activeIndex];
    if (!activeSlide) return;

    const img = activeSlide.querySelector("img");
    if (img) {
      download.href = img.src;
      download.setAttribute("download", img.src.split("/").pop());
    }
  });

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
    swiperWrapper.innerHTML = "";

    list.forEach((imgObj, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.classList.add("img_box");
      btn.setAttribute("role", "listitem");

      const img = document.createElement("img");
      img.src = imgObj.src;
      img.loading = "lazy";
      img.alt = imgObj.alt;

      btn.appendChild(img);
      li.appendChild(btn);
      photoList.appendChild(li);

      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.innerHTML = `<img src="${imgObj.src}" alt="${imgObj.alt || ""}" />`;
      swiperWrapper.appendChild(slide);

      btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.setAttribute("aria-modal", "true");

        download.classList.add("on");
        closeBtn.classList.add("on");

        setFocusTrapElements();
        if (firstFocus) firstFocus.focus();
        modalSwiper.slideTo(i);
      });
    });

    modalSwiper.update();
  }

  function hideModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-modal", "false");

    download.classList.remove("on");
    closeBtn.classList.remove("on");
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
    } else if (e.key === "ArrowLeft") modalSwiper.slidePrev();
    else if (e.key === "ArrowRight") modalSwiper.slideNext();
    else if (e.key === "Escape") hideModal();
  });

  appContent.hidden = false;
  galleryContainer.hidden = false;

  renderGallery(galleryImgs);
}
