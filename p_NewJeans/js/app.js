export function app() {
  const folderView = document.getElementById("folder");
  const appFolder = document.querySelectorAll(".folder");

  appFolder.forEach((li) => {
    li.addEventListener("click", () => {
      folderView.classList.add("on");

      const albumName = li.id; // 예: 'bubblegum', 'howsweet', 'supernatural' 등
      pc_gallery(albumName);
      
      // 그리고 폴더 타이틀도 변경 가능
      const folderTitle = document.querySelector(".floder_title");
      folderTitle.textContent = albumName; // 필요시 한글명으로 매핑해도 좋아요
    });
  });
}