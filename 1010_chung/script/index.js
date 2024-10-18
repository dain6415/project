// 번수 정의
const section = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const sectLast = section[section.length - 1];
const sectLastTop = sectLast.offsetTop;
// alert(sectLastTop)
// console.log(section)

// 섹션의 리스트 정보를 찾아라(현재 섹션, 섹션의 순서){}
section.forEach((sect, i) => {
  sect.addEventListener("wheel", function (e) {
    e.preventDefault();

    let delta = e.deltaY;

    if (delta < 0 && i === 0) {
      return;
    } else if (delta > 0 && i === section.length - 1) {
      footer.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // 위의 것만 하면 스크롤 안 움직임
    let secTop =
      delta < 0 ? sect.previousElementSibling : sect.nextElementSibling;
    if (secTop) {
      let targetSecTop = secTop.offsetTop;
      window.scrollTo({ top: targetSecTop, behavior: "smooth" });
    } else {
    }
  });
});
// 마우스 휠을 움직이면~
// 이벤트 제어
// 마우스 휠의 이동방향
// 만약(섹션의 0번째 순서에서 마우스 휠을 위로 올리면~){
// 동작 하지 말아라=올라가지마}
// 반대로 만약(섹션의 마지막 순서에서 마우스 휠을 아래로 내리면 / section.length - 1=섹션 마지막 ){}

window.addEventListener("wheel", function (e) {
  // console.log(
  //   `window.innerHeight:${window.innerHeight},window.scrollY:${window.scrollY}`
  // );
  // console.log(
  //   document.body.scrollHeight,
  //   window.innerHeight + this.window.scrollY
  // );
  if (
    e.deltaY < 0 &&
    window.height + this.window.scrollY == this.document.body.scrollHeight - 10
  ) {
    e.preventDefault();
    this.window.scrollTo({ top: sectLast, behavior: "smooth" });
  }
});

// sect5 menu
// $("ul.contents-list li").click(function () {
//   $(this).find("con");
// });
//tab ---------------------
$("ul.contents-list li").click(function () {
  $("ul.contents-list li").removeClass("on");
  $(this).addClass("on");

  let idx = $(this).index();
  $(".content").hide();
  $(".content").eq(idx).show();
});

// $("ul.contents-list li a").click(function (e) {
//   e.preventDefault();
//   let attr = $(this).attr("href");
//   console.log(attr);
//   $(".visual img").attr("src", attr);
//   let idx = $(this).parent().index();
//   $(".desc li").removeClass("on");
//   $(".desc li").eq(idx).addClass("on");
// });
