// nav menu
// $('li.main-m').mouseenter(function(){
//   $(this).find('ul.sub-m').fadeIn()
// })
// $('li.main-m').mouseleave(function(){
//   $(this).find('ul.sub-m').fadeOut()
// })
// 슬라이드로~ 전체로
$('li.main-m').mouseenter(function(){
  $('ul.sub-m').stop().fadeIn()
})
$('li.main-m').mouseenter(function(){
  $('ul.sub-m').stop().fadeOut()
})


// slide
//slide-wrap에 position:relative 해주면 margin 안써도 됨
setInterval(function () {
  $('.slide-wrap').animate({ 'top': '-100%' }, function () {
      $('.slide:first').appendTo('.slide-wrap')
      $('.slide-wrap').css({ 'top': '0%' })
  })
}, 5000)

// tab
$('.tablist li').click(function (e) {
  e.preventDefault()
  // bg 넣고 빼고 = Class 뗐다 붙였다
      $('.tablist li').removeClass('on') //bg 지우기
      $(this).addClass('on') //클릭한 것에 bg 추가
  
  // notice, gallery 보였다 안보였다
      let idx = $(this).index()
      alert(idx)
      $('.tab').hide() // 다 숨기고
      $('.tab').eq(idx).show() //하나만 보여줌
  })

// popup
$('.modal').click(function(){
  $('.popup').fadeIn()
})
$('.close').click(function(){
  $('.popup').hide()
})