export function goods (){
  const goods = Array.from({ length: 30 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return {
      src: `./img/goods/NJ_goods_${num}.png`,
      member: "goods",
    };
  });

  const goodsImgs = goods;

  const goodsImgContainer = document.getElementById("goods_img_container");
  
  function renderGoods(list) {
    goodsImgContainer.innerHTML = "";
    list.forEach((imgObj, i) => {
      
      const imgBox = document.createElement("div");
      imgBox.classList.add("img_box");

      const img = document.createElement("img");
      img.src = imgObj.src;
      img.dataset.index = i;
      img.alt = imgObj.member;

      goodsImgContainer.appendChild(imgBox);
      imgBox.appendChild(img);
    });
  }
  renderGoods(goodsImgs);
}