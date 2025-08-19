export function pc_mv(folderName, mv, type) {
  const folderListWrap = document.getElementById("list_wrap");
  folderListWrap.className = "contents";
  
  const folderNameClass = typeof folderName === "string" ? folderName : "mv";
  folderListWrap.classList.add(folderNameClass);  

  if (type) folderListWrap.classList.add(type);

  function renderVideo(videoList) {
    folderListWrap.innerHTML = "";
    videoList.forEach((vidObj) => {
      const vidBox = document.createElement("button");
      vidBox.type = "button";
      vidBox.classList.add("video_box");
      vidBox.setAttribute("role", "listitem");
      vidBox.setAttribute("aria-label", vidObj.title);

      const figure = document.createElement("figure");

      const mvIframe = document.createElement("iframe");
      mvIframe.src = vidObj.src;
      mvIframe.setAttribute("frameborder", "0");
      mvIframe.setAttribute("allowfullscreen", "");

      const iframeCaption = document.createElement("figcaption");
      iframeCaption.innerText = vidObj.title;

      folderListWrap.appendChild(vidBox);
      vidBox.appendChild(figure);
      figure.appendChild(mvIframe);
      figure.appendChild(iframeCaption);
    });
  }

  renderVideo(mv.contents);
}
