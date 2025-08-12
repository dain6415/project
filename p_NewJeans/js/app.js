export function app() {
  const folderView = document.getElementById("folder");
  const appFolder = document.querySelectorAll(".folder");

  document.addEventListener("DOMContentLoaded", () => {
    appFolder.forEach((li) => {
      li.addEventListener("click", () => {
        folderView.classList.add("on");
      });
    });
  });
}