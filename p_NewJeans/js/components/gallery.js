export function pc_gallery(folderName, albums, type) {
  const galleryImgs = albums[folderName] || [];

  const folderListWrap = document.getElementById("list_wrap");
  folderListWrap.className = "contents";
  folderListWrap.classList.add(folderName);
  if (type) folderListWrap.classList.add(type);

  const modal = document.querySelector(".modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modal_img");
  const download = document.getElementById("download");
  const closeBtn = document.getElementById("close");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

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
    folderListWrap.innerHTML = "";
    list.forEach((imgObj, i) => {
      const imgBox = document.createElement("button");
      imgBox.classList.add("img_box");
      imgBox.setAttribute("role","listitem");

      const figure = document.createElement("figure");
      const imgFrame = document.createElement("div");
      imgFrame.classList.add("img_frame");

      const img = document.createElement("img");
      img.src = imgObj.src;
      img.loading = "lazy";
      img.dataset.index = i;
      img.alt = imgObj.alt;

      imgBox.addEventListener("click", () => {
        modalOpen(i);
      });

      imgBox.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          modalOpen(i);
        }
      });

      const caption = document.createElement("figcaption");
      caption.classList.add("img_name");
      caption.textContent = imgObj.alt;

      imgBox.appendChild(figure);
      figure.appendChild(imgFrame);
      imgFrame.appendChild(img);
      figure.appendChild(caption);
      folderListWrap.appendChild(imgBox);
    });
  }

  function updateView(index) {
    currentIndex = index;
    const imgData = galleryImgs[index];
    modalTitle.textContent = imgData.src.split("/").pop().split(".")[0];
    modalImg.src = imgData.src;
    modalImg.alt = imgData.alt || "";
    download.href = imgData.src;
    download.setAttribute("download", imgData.src.split("/").pop());
  }

  function modalOpen(index) {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-modal","true");
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
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("hidden")) return;

    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocus) {
          e.preventDefault();
          lastFocus.focus();
        }
      } else {
        if (document.activeElement === lastFocus) {
          e.preventDefault();
          firstFocus.focus();
        }
      }
    } else if (e.key === "ArrowLeft") {
      showPrevImage();
    } else if (e.key === "ArrowRight") {
      showNextImage();
    } else if (e.key === "Escape") {
      hideModal();
    }
  });

  renderGallery(galleryImgs);
}
