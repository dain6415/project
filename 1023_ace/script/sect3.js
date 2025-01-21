      // COLLECTION swiper ----------------------------------------
      var swiperWeb = new Swiper(".sect3 .web", {
        slidesPerView: 1,
        spaceBetween: 50,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
        },
        navigation: {
          nextEl: ".next3", // 고유한 클래스 이름으로 변경
          prevEl: ".prev3", // 고유한 클래스 이름으로 변경
        },
        on: {
          resize: function () {
            this.update(); // 화면 크기 변경 시 Swiper 업데이트
          },
        },
      });

      window.addEventListener("resize", function () {
        swiperS3web.update(); // 강제로 Swiper 업데이트
      });

      const colTab = document.querySelectorAll(".col_tab li");
      const product = document.querySelectorAll(".prod");

      colTab.forEach((tab, index) => {
        tab.addEventListener("click", function () {
          colTab.forEach((t) => t.classList.remove("on"));
          product.forEach((product) => product.classList.remove("on"));

          tab.classList.add("on");
          product[index].classList.add("on");

           swiperS3web.update();  // Swiper 업데이트
    swiperS3web.scrollbar.updateSize();
        });
      });

      // news swiper ----------------------------------------
      var swiper = new Swiper(".news .swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
        },
      });

      const newsTabs = document.querySelectorAll(".news .swiper_tab p");

      // 탭 클릭 이벤트 추가
      newsTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          newsTabs.forEach((t) => t.classList.remove("on"));

          tab.classList.add("on");
          // Swiper를 해당 인덱스로 이동
          swiper.slideTo(index);
        });
      });

      // 탭 업데이트 함수
      function updateTabs(activeIndex) {
        // 모든 탭에서 'on' 클래스 제거
        newsTabs.forEach((t) => t.classList.remove("on"));

        // 현재 활성화된 슬라이드에 해당하는 탭에 'on' 클래스 추가
        newsTabs[activeIndex].classList.add("on");
      }