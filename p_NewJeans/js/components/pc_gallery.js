export function pc_gallery(folderName, albums, type) {
  const galleryImgs = albums[folderName] || [];

  const folderListWrap = document.getElementById("list_wrap");

  folderListWrap.className = "contents";
  folderListWrap.classList.add(folderName);
  if (type) folderListWrap.classList.add(type);
  

  const modal = document.querySelector(".modal");
  const modalImg = document.getElementById("modal_img");
  const download = document.getElementById("download");
  const closeBtn = document.getElementById("close");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let currentIndex = 0;

  function renderGallery(list) {
    folderListWrap.innerHTML = "";
    list.forEach((imgObj, i) => {
      const imgBox = document.createElement("div");
      imgBox.classList.add("img_box");
      
      const figure = document.createElement("figure");
      const imgFrame = document.createElement('div');
      imgFrame.classList.add('img_frame')

      const img = document.createElement("img");
      img.src = imgObj.src;
      img.loading = "lazy";
      img.dataset.index = i;
      img.alt = imgObj.alt;
      img.addEventListener("click", () => {
        modalOpen(i);
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
