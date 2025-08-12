export function pc_gallery(albumName) {
  const albums = {
    bubblegum: Array.from({ length: 60 }, (_, i) => {
      const num = String(i + 1).padStart(2, "0");
      return {
        src: `./img/photo/BubbleGum/NJ_BubbleGum_${num}.jpg`,
        alt: `BubbleGum ${num}`,
      };
    }),
    howsweet: Array.from({ length: 60 }, (_, i) => {
      const num = String(i + 1).padStart(2, "0");
      return {
        src: `./img/photo/HowSweet/NJ_HowSweet_${num}.jpg`,
        alt: `HowSweet ${num}`,
      };
    }),
    supernatural: Array.from({ length: 99 }, (_, i) => {
      const num = String(i + 1).padStart(2, "0");
      return {
        src: `./img/photo/Supernatural/NJ_Supernatural_${num}.jpg`,
        alt: `Supernatural ${num}`,
      };
    }),
  };

  const galleryImgs = albums[albumName] || [];

  const galleryImgContainer = document.getElementById("gallery_img_container");
  const modal = document.querySelector(".modal");
  const modalImg = document.getElementById("modal_img");
  const download = document.getElementById("download");
  const closeBtn = document.getElementById("close");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let currentIndex = 0;

  function renderGallery(list) {
    galleryImgContainer.innerHTML = "";
    list.forEach((imgObj, i) => {
      const imgBox = document.createElement("div");
      imgBox.classList.add("img_box");

      const img = document.createElement("img");
      img.src = imgObj.src;
      img.loading = "lazy";
      img.dataset.index = i;
      img.alt = imgObj.alt;
      img.addEventListener("click", () => {
        modalOpen(i);
      });

      galleryImgContainer.appendChild(imgBox);
      imgBox.appendChild(img);
    });
  }

  function updateView(index) {
    currentIndex = index;
    modalImg.src = galleryImgs[index].src;
    download.href = galleryImgs[index].src;
    download.setAttribute("download", galleryImgs[index].src.split("/").pop());
  }

  function modalOpen(index) {
    modal.classList.remove("hidden");
    updateView(index);
  }
  function hideModal() {
    modal.classList.add("hidden");
    modalImg.src = "";
  }

  function showPrevImage() {
    if (currentIndex > 0) {
      updateView(currentIndex - 1);
    }
  }
  function showNextImage() {
    if (currentIndex < galleryImgs.length - 1) {
      updateView(currentIndex + 1);
    }
  }

  closeBtn.addEventListener("click", hideModal);
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("hidden")) return;
    if (e.key === "ArrowLeft") showPrevImage();
    else if (e.key === "ArrowRight") showNextImage();
    else if (e.key === "Escape") hideModal();
  });

  renderGallery(galleryImgs);
}
