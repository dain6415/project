// art1 --------------------------------------------------------------------------
// item3 이미지 클릭시 이벤트 제어
$(".imgs li a img").click(function (e) {
  e.preventDefault();

  var imgSrc = $(this).attr("src");

  //img의 주소를 현재 내가 누른 이미지의 주소로 바꿔라
  $(".popup-contents").attr("src", imgSrc);
  $(".popup").fadeIn();
});
$(".close").click(function () {
  $(".popup").fadeOut();
});

//item5 노래재생
$(document).ready(function () {
  const songList = $("audio"); 
  let nowPlaying = 0;
  let playing = false;

  songList.each(function () {
    this.loop = false; 
  });
  songList.get(nowPlaying).loop = true;

  $(".playbtn li.play").click(function () {
    const currentSong = songList.get(nowPlaying);
    const playIcon = $(this).find("img");

    if (playing) {
      currentSong.pause();
      playIcon.attr("src", "./img/music-icon/art1-icon-play.png");
    } else {
      currentSong.play().catch(err => {
        console.error("재생 에러:", err);
      });
      playIcon.attr("src", "./img/music-icon/art1-icon-stop.png");
    }

    playing = !playing;
  });

  $(".playbtn li.next").click(function () {
    const currentSong = songList.get(nowPlaying);
    currentSong.pause();
    currentSong.currentTime = 0;
    currentSong.loop = false;

    nowPlaying = (nowPlaying + 1) % songList.length;
    const nextSong = songList.get(nowPlaying);

    nextSong.loop = true;

    nextSong.play().catch(err => {
      console.error("재생 에러:", err);
    });

    $(".playbtn li.play img").attr("src", "./img/music-icon/art1-icon-stop.png");
    $(".now .song").text(nowPlaying === 0 ? "Supernatural" : "Right Now");

    playing = true;
  });
});



// art2 -----------------------------------------------------------------------------------
//뮤비 재생
//
$(".title-menu li").click(function (e) {
  e.preventDefault();
  // bg 넣고 빼고 = Class 뗐다 붙였다
  $(".title-menu li").removeClass("on"); //bg 지우기
  $(this).addClass("on"); //클릭한 것에 bg 추가

  // notice, gallery 보였다 안보였다
  let idx = $(this).index();
  $(".tab").hide(); // 다 숨기고
  $(".tab").eq(idx).show(); //하나만 보여줌
});

// 아마도 영상 클릭시 이벤트?
/***********************************/
// 슈퍼내추럴
$(".supernatural .next li").click(function () {
  let idx = $(this).index(); // 클릭한 li 자릿수 저장
  $(".supernatural .next li").removeClass("none"); // li 모두 block 처리
  $(this).addClass("none"); // 클릭한 li 만 none
  $(".supernatural ul.title-wrap > li").css({ display: "none" }); // title 모두 none
  $(".supernatural ul.title-wrap > li").eq(idx).css({ display: "block" }); // 클릭한 li 와 같은 자릿수의 title 만 block 처리

  let videoSrc = $(this).find("a").attr("href"); // 클릭한 li 내부의 a 태그에서 href 속성 값 가져오기
  $("iframe[name='scene']").attr("src", videoSrc); // iframe의 src 변경
  // = 클릭한 li 안의 a 태그에서 href 값을 찾아 비디오 링크를 가져오고,
  // 그 링크를 iframe의 src 속성에 넣어서 화면에 비디오가 변경되도록 한다.
  // videoSrc = 비디오 주소
  // attr = 속성 값
  /*************/
});

// 롸잇나우
$(".right_now .next li").click(function () {
  // e.preventDefault();

  let idx = $(this).index(); // 클릭한 li 자릿수 저장
  $(".right_now .next li").removeClass("none"); // li 모두 block 처리
  $(this).addClass("none"); // 클릭한 li 만 none
  $(".right_now ul.title-wrap > li").css({ display: "none" }); // title 모두 none
  $(".right_now ul.title-wrap > li").eq(idx).css({ display: "block" }); // 클릭한 li 와 같은 자릿수의 title 만 block 처리

  let videoSrc = $(this).find("a").attr("href"); // 클릭한 li 내부의 a 태그에서 href 속성 값 가져오기
  $("iframe[name='scene2']").attr("src", videoSrc); // iframe의 src 변경
  // = 클릭한 li 안의 a 태그에서 href 값을 찾아 비디오 링크를 가져오고,
  // 그 링크를 iframe의 src 속성에 넣어서 화면에 비디오가 변경되도록 한다.
  // videoSrc = 비디오 주소
  // attr = 속성 값
  /*************/
});

// 현재 누른 li의 a를 찾아라. +

// $(".art3 a").click(function (e) {
//   e.preventDefault();
// });
