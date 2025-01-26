// sect1 slide
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 1500, // 슬라이드 간의 시간 (ms)
    disableOnInteraction: false, // 사용자 상호작용 시 자동 재생이 멈추지 않도록 설정
  },
});

// SplitText
const { chars1 } = new SplitText(".text1", { type: "chars words" });
const { chars2 } = new SplitText(".text2", { type: "chars words" });
const { chars3 } = new SplitText(".text3", { type: "chars words" });
const { chars4 } = new SplitText(".text4", { type: "chars words" });
const { chars5 } = new SplitText(".text5", { type: "chars words" });
const { chars6 } = new SplitText(".text6", { type: "chars words" });
const { chars7 } = new SplitText(".text7", { type: "chars words" });

gsap.set(".bg > div", { opacity: 0 });

gsap.registerEffect({
  name: "textEffect",
  extendTimeline: true,
  defaults: {
    x: 20,
    y: -20,
  },
  effect: (target, { x, y }) => {
    const { chars } = new SplitText(target, { type: "chars" });
    const index = target[0].dataset.index; //인덱스 값읽어들인다
    const tl = gsap.timeline();

    tl.from(chars, {
      x: x,
      opacity: 0,
      filter: "blur(5px)",
      stagger: 0.1,
    })
      .to(`.bg > div:nth-child(${index})`, { opacity: 1 }, 0)
      .to(chars, { delay: 3, opacity: 0, y: y, stagger: 0.05 })
      .to(`.bg > div:nth-child(${index})`, { opacity: 1 }, .5);
    return tl;
  },
});

function textAnimation() {
  const animation = gsap.timeline({
    repeat: -1,
  });
  animation
    .textEffect(".slide1")
    .textEffect(".slide2")
    .textEffect(".slide3")
    .textEffect(".slide4")
    .textEffect(".slide5")
    .textEffect(".slide6")
    .textEffect(".slide7");
}

textAnimation();
