export function pc_mv(mv, type) {
  const folderListWrap = document.getElementById("list_wrap");
  folderListWrap.className = "contents";
  folderListWrap.classList.add(folderName);
  if (type) folderListWrap.classList.add(type);

  // 리스트 렌더링 코드...
}