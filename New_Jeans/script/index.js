// art1 --------------------------------------------------------------------------
// item3 이미지 클릭시 이벤트 제어
//꼭 아래처럼 이미지라고 써야..하는 거니? 이미지의 주소로 바뀌니까?
  $('.art1 .item3 li a img').click(function(e){
    e.preventDefault();

    // 변수(근데 정확히 먼 차인지 모르겠음) 정의 = 현재 내가 누른 것의 src
    var  imgSrc = $(this).attr('src');

    //img의 주소를 현재 내가 누른 이미지의 주소로 바꿔라
    $('.popup-contents').attr('src',imgSrc);
    $('.popup').fadeIn();
  })
  $('.close').click(function(){
    $('.popup').fadeOut();
  })


//item5 노래재생
$(document).ready(function () {
  const songs = [$("audio").get(0), $("audio").get(1)]; // 두 개의 곡 배열로 저장
  let currentSongIndex = 0; // 현재 곡 인덱스
  let isPlaying = false; // 재생 상태 체크

  // 재생 토굴 버튼
  $(".playbtn li:first-child").click(function (e) {
    e.stopPropagation();
    if (isPlaying) {
      songs[currentSongIndex].pause();
      $(this).find("img").attr("src", "./img/music-icon/art1-icon-play.png");
    } else {
      songs[currentSongIndex].play();
      $(this).find("img").attr("src", "./img/music-icon/art1-icon-stop.png");
    }
    isPlaying = !isPlaying;
  });

  $(".playbtn li:last-child").click(function (e) {
    e.stopPropagation();
    songs[currentSongIndex].pause(); // 현재 곡 멈춤
    songs[currentSongIndex].currentTime = 0;
    currentSongIndex = (currentSongIndex + 1) % songs.length; // 다음 곡 인덱스
    songs[currentSongIndex].play(); // 다음 곡 재생
    $(".playbtn li:first-child img").attr(
      "src",
      "./img/music-icon/art1-icon-stop.png"
    );
    // $('.play img').attr('src', './img/music-icon/art1-icon-stop.png'); // 아이콘 업데이트
    $(".now .song").text(currentSongIndex === 0 ? "Supernatural" : "Right Now"); // 현재 곡 제목 업데이트
    $(".now .singer").text("NewJeans"); // 가수 이름 업데이트
    isPlaying = true; // 상태를 true로 설정
  });
});

$(".playbtn li:first-child").click(function (event) {
  event.stopPropagation(); // 이벤트 전파 방지
  // 재생 또는 정지 로직
});



// art2 -----------------------------------------------------------------------------------
//뮤비 재생
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

//
$(".choreo .next li").click(function () {
  // e.preventDefault();

  let idx = $(this).index(); // 클릭한 li 자릿수 저장
  $(".choreo .next li").removeClass("none"); // li 모두 block 처리
  $(this).addClass("none"); // 클릭한 li 만 none
  $(".choreo ul.title-wrap > li").css({ display: "none" }); // title 모두 none
  $(".choreo ul.title-wrap > li").eq(idx).css({ display: "block" }); // 클릭한 li 와 같은 자릿수의 title 만 block 처리

  let videoSrc = $(this).find("a").attr("href"); // 클릭한 li 내부의 a 태그에서 href 속성 값 가져오기
  $("iframe[name='scene2']").attr("src", videoSrc); // iframe의 src 변경
  // = 클릭한 li 안의 a 태그에서 href 값을 찾아 비디오 링크를 가져오고,
  // 그 링크를 iframe의 src 속성에 넣어서 화면에 비디오가 변경되도록 한다.
  // videoSrc = 비디오 주소
  // attr = 속성 값
  /*************/
});

// 현재 누른 li의 a를 찾아라. +




$('.art3 a').click(function(e){
  e.preventDefault()
})
