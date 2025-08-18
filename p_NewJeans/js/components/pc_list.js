export function pc_list(folderName, streaming, type) {
  const folderListWrap = document.getElementById("list_wrap");
  folderListWrap.className = "contents";

  const folderNameClass = typeof folderName === "string" ? folderName : "list";

  folderListWrap.classList.add(folderNameClass);

  if (type) folderListWrap.classList.add(type);

  function renderList(items, container) {
    container.innerHTML = "";
  
    const table = document.createElement("table");
    table.classList.add("site_list");
  
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["이미지", "이름", "크기", "종류"].forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    const tbody = document.createElement("tbody");
  
    items.forEach(({imgSrc, alt, src, text, size, type }) => {
      const tr = document.createElement("tr");
    
      const tdImg = document.createElement("td");
      const imgEl = document.createElement("img");
      imgEl.src = imgSrc;
      imgEl.alt = alt;
      tr.appendChild(tdImg);
      tdImg.appendChild(imgEl);
    
      const tdName = document.createElement("td");
      const link = document.createElement("a");
      link.href = src;
      link.textContent = text || "-";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      tdName.appendChild(link);
      tr.appendChild(tdName);
    
      const tdSize = document.createElement("td");
      tdSize.textContent = size;
      tr.appendChild(tdSize);
      
      const tdType = document.createElement("td");
      tdType.textContent = type || "-";
      tr.appendChild(tdType);
    
      tbody.appendChild(tr);
    });
    
  
    table.appendChild(tbody);
    container.appendChild(table);
  }  

  // 렌더 호출
  renderList(streaming.contents, folderListWrap);
}