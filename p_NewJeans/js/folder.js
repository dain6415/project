export function folder() {
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
  });
}