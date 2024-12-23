var swiper1 = new Swiper(".slide1", {
    effect: "fade", //겹쳐지는 효과를 주고 싶다
    speed: 1000, //변환속도 지정
    autoplay: {
      //반복
      delay: 3000, //2.5초 동안?
      disableOnInteraction: false,
    },
  });

  // //버튼 클릭하면 해당 번째의 슬라이드 show
  // $("nav ul li").click(function (e) {
  //   e.preventDefault(); //a 누르면 맨위로 올라가는 걸 방지
  //   let idx = $(this).index();
  //   $("nav ul li").removeClass("on");
  //   $(this).addClass("on");
  //   swiper1.slideTo(idx, 500); //해당 슬라이드 번째 보여줘
  // });

  //li를 모두 가져와라
  const liElems = document.querySelectorAll(".menu ul li");
  // console.log(liElems)
  //모든 li를 대상으로~  각각 li요소
  liElems.forEach(function (liElem, idx) {
    // console.log(liElems, idx);
    //각각 li
    liElem.addEventListener("click", function (e) {
      e.preventDefault();
      // 모든 li
      liElems.forEach(function (item) {
        item.classList.remove("on");
      });
      // 각각 활성화
      liElem.classList.add("on");
      swiper1.slideTo(idx, 500);
    });
  });

  // //슬라이드가 넘어갈 때 해당 슬라이드의 버튼이 활성화
  // swiper1.on("slideChange", function () {
  //   let activeIdx = swiper1.activeIndex //.activeIndex - 앤 this처럼 지정된 기능이라서 이름 바꾸기 NO
  //   console.log(activeIdx);
  //   //모든 네비 비활성화

  //   //해당번째 네비를 활성화
  //   $('nav ul li').removeClass('on')
  // $('nav ul li').eq(activeIdx).addClass('on')
  // });

  swiper1.on("slideChange", function () {
    let activeIdx = swiper1.activeIndex;

    liElems.forEach(function (item) {
      item.classList.remove("on");
    });
    liElems[activeIdx].classList.add("on");
  });

  // header nav
  $("ul.gnb li").mouseenter(function () {
    $(this).find("ul.gnb_on").stop().slideDown();
  });
  $("ul.gnb li").mouseleave(function () {
    $(this).find("ul.gnb_on").stop().slideUp();
  });

  // btns_guide
// 'download'와 'preview' 클래스를 가진 li 요소들을 선택
let preview = document.querySelector('.preview img');
let download = document.querySelector('.download img');

function mouseoverPreview() {
  preview.setAttribute("src", "./img/btn_link1_on.png"); // preview 이미지 변경
}

function mouseleavePreview() {
  preview.setAttribute("src", "./img/btn_link1_off.png"); // preview 이미지 원래대로
}

function mouseoverDownload() {
  download.setAttribute("src", "./img/btn_link2_on.png"); // download 이미지 변경
}

function mouseleaveDownload() {
  download.setAttribute("src", "./img/btn_link2_off.png"); // download 이미지 원래대로
}

// 각 li 요소에 마우스 이벤트 리스너 추가
document.querySelector('.preview').addEventListener('mouseover', mouseoverPreview);
document.querySelector('.preview').addEventListener('mouseleave', mouseleavePreview);
document.querySelector('.download').addEventListener('mouseover', mouseoverDownload);
document.querySelector('.download').addEventListener('mouseleave', mouseleaveDownload);


  //borad
  setInterval(function () {
    $('.board .left .list ul').animate({ 'top': '-100%' }, 1500, 'linear', function () { // 2000ms로 속도 설정
        $('.left .list ul li:first').appendTo('.board .left .list ul');
        $('.board .left .list ul').css({ 'top': '0%' });
    });
}, 2000);

setInterval(function () {
  $('.board .right .list ul').animate({ 'top': '-100%' }, 1500, 'linear', function () { // 2000ms로 속도 설정
      $('.right .list ul li:first').appendTo('.board .right .list ul');
      $('.board .right .list ul').css({ 'top': '0%' });
  });
}, 2000);
  //family btn
  $('.family').mouseenter(function(){
    $('.family_list').show()
  })
  $('.family').mouseleave(function(){
    $('.family_list').hide()
  })
  //맨 위로 올라가기
  document.querySelector('#homeTop').addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({top:0,behavior:'smooth'})
  })