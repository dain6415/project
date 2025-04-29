// #newsstand ------------------------
const newsStandHeaderTab = document.querySelectorAll("#newsstand .tab_item a");

newsStandHeaderTab.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    newsStandHeaderTab.forEach((el) => {
      el.setAttribute("aria-selected", "false");
    });
    tab.setAttribute("aria-selected", "true");
  });
});

const btnMoreOpen = document.querySelectorAll(".btn_more");

btnMoreOpen.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const contentHeaderSub = document.querySelector(".content_header_sub");
    const subMore = contentHeaderSub.querySelector(".sub_more");
    const isOpen = subMore.classList.contains("show");

    document.querySelectorAll(".sub_more").forEach((el) => {
      el.classList.remove("show");
      el.setAttribute("aria-hidden", "true");
    });
    document.querySelectorAll(".btn_more").forEach((el) => {
      el.classList.remove("show");
      el.setAttribute("aria-pressed", "false");

      const btnMoreIco = el.querySelector(".ico_triangle");
      if (btnMoreIco) {
        btnMoreIco.style.transform = "rotate(0deg)";
      }
    });

    if (!isOpen) {
      subMore.classList.add("show");
      subMore.setAttribute("aria-hidden", "false");
      btn.classList.add("show");
      btn.setAttribute("aria-pressed", "true");

      const btnMoreIco = btn.querySelector(".ico_triangle");
      if (btnMoreIco) {
        btnMoreIco.style.transform = "rotate(180deg)";
      }
    }
  });
});

// #feed ------------------------
const feedListeWrap = document.querySelector(".list_wrap .commom_list");
const feedPrevBtn = document.querySelector(".feed_box .btn_prev");
const feedNextBtn = document.querySelector(".feed_box .btn_next");

let feedCurrentIndex = 0; // 현재 슬라이드 인덱스
const feedMaxIndex = feedListeWrap.children.length - 1; // 마지막 슬라이드 인덱스

feedPrevBtn.style.display = "none";

feedNextBtn.addEventListener("click", () => {
  if (feedCurrentIndex < 2) {
    // 1번까지만 이동
    feedCurrentIndex++;
    feedListeWrap.style.transform = `translateX(-${feedCurrentIndex * 100}%)`;
    feedPrevBtn.style.display = "block";
  }
  if (feedCurrentIndex === 2) {
    feedNextBtn.style.display = "none";
  }
});
feedPrevBtn.addEventListener("click", () => {
  if (feedCurrentIndex > 0) {
    // 0번까지만 이동
    feedCurrentIndex--;
    feedListeWrap.style.transform = `translateX(-${feedCurrentIndex * 100}%)`;
    feedNextBtn.style.display = "block";
  }
  if (feedCurrentIndex === 0) {
    feedPrevBtn.style.display = "none";
  }
});

// weatherCanvas ------------------------
const lineHeight = 31;
const lineWidth = 180;

const weatherCanvas = document.querySelector(".weather_graph canvas");
weatherCanvas.width = lineWidth; // 선의 너비에 맞게 캔버스 너비 설정
weatherCanvas.height = lineHeight;
const weatherCanvaCtx = weatherCanvas.getContext("2d");

weatherCanvaCtx.fillStyle = "transparent";
weatherCanvaCtx.fillRect(0, 0, weatherCanvas.width, weatherCanvas.height);

weatherCanvaCtx.strokeStyle = "#e3e5e8";
weatherCanvaCtx.lineWidth = 2;
// weatherCanvaCtx.beginPath(0, 0);
weatherCanvaCtx.moveTo(0, 1);
weatherCanvaCtx.lineTo(16, 1);
weatherCanvaCtx.lineTo(52, 15);
weatherCanvaCtx.lineTo(90, 30);
weatherCanvaCtx.lineTo(127, 30);
weatherCanvaCtx.lineTo(165, 30);
weatherCanvaCtx.lineTo(180, 30);
weatherCanvaCtx.stroke();

// 증시 더보기 ------------------------
const stockMarketBtn = document.querySelector(".header_group .btn_info");
const stockMarketMore = document.querySelector(".header_group .layer_info");

stockMarketBtn.setAttribute("aria-expanded", "false");

stockMarketBtn.addEventListener("click", function () {
  let isExpanded = this.getAttribute("aria-expanded") === "true";

  this.setAttribute("aria-expanded", !isExpanded);

  if (!isExpanded) {
    stockMarketMore.style.display = "block";
  } else {
    stockMarketMore.style.display = "none";
  }
});

const stockMarketCloseBtn = document.querySelector(".btn_close");

stockMarketCloseBtn.addEventListener("click", () => {
  stockMarketMore.style.display = "none";
  stockMarketBtn.setAttribute("aria-expanded", "false");
});

// 오늘 날짜, 시간 구하기 ------------------
document.addEventListener("DOMContentLoaded", function () {
  const headerAside = document.querySelector(".header_aside");

  const btnRefresh = document.createElement("button");
  btnRefresh.type = "button";
  btnRefresh.classList.add("btn_refresh");
  btnRefresh.innerHTML = '<span class="blind">새로고침</span>';

  headerAside.appendChild(btnRefresh);

  function displayTime() {
    var today = new Date();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    var hours = ("0" + today.getHours()).slice(-2);
    var minutes = ("0" + today.getMinutes()).slice(-2);

    var timeString = month + "." + day + "." + " " + hours + ":" + minutes;

    headerAside.innerHTML = timeString;

    headerAside.appendChild(btnRefresh);
  }
  displayTime();

  // 버튼 클릭 시 시간 새로고침
  btnRefresh.addEventListener("click", function () {
    displayTime();
  });
});

// banner left_1 ------------------
const leftAd1 = document.getElementById("left-ad-1");

fetch("./banner/left_1.html")
  .then((response) => response.text())
  .then((html) => {
    leftAd1.innerHTML = html;
  });
// banner right_1 ------------------
const rightAd1 = document.getElementById("right-ad-1");

fetch("./banner/right_1.html")
  .then((response) => response.text())
  .then((html) => {
    rightAd1.innerHTML = html;
  });
// banner right_2 ------------------
const rightAd2 = document.getElementById("right-ad-2");

fetch("./banner/right_2.html")
  .then((response) => response.text())
  .then((html) => {
    rightAd2.innerHTML = html;
  });

// calender -------------------
const todayDate = document.querySelector(".link_info_date");
const todayDateMonth = document.createElement("span");
todayDateMonth.classList.add("day");
todayDateMonth.textContent = "월";

let calenderToday = new Date();

function displayToday() {
  var month = calenderToday.getMonth() + 1;
  var day = ("0" + calenderToday.getDate()).slice(-2);

  var timeString = month + "." + day;

  todayDate.innerHTML = timeString;

  todayDate.appendChild(todayDateMonth);
}
displayToday();

// const calendarBody = document.querySelector('.calendar_body')
const calendarBody = document.querySelector(".calendar_body");

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth(); // 현재 월 (0부터 시작)

function renderCalendarTable() {
  calendarBody.innerHTML = ""; // 기존 내용 비우기

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate(); // 이번 달 마지막 날
  const prevLastDate = new Date(year, month, 0).getDate(); // 저번 달 마지막 날

  let tr = document.createElement("tr");
  let dayCount = 0;

  // 이전 달 날짜 표시
  for (let i = 0; i < firstDay; i++) {
    let td = document.createElement("td");
    td.textContent = prevLastDate - firstDay + 1 + i;
    td.classList.add("prev-month");
    tr.appendChild(td);
    dayCount++;
  }

  // 이번 달 날짜 표시
  for (let day = 1; day <= lastDate; day++) {
    let td = document.createElement("td");
    td.textContent = day;

    // 오늘이면
    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate()
    ) {
      td.classList.add("today");
    }

    if (dayCount % 7 === 0) {
      td.classList.add("sunday");
    }

    tr.appendChild(td);
    dayCount++;

    // 일요일이면 줄바꿈
    if (dayCount % 7 === 0) {
      calendarBody.appendChild(tr);
      tr = document.createElement("tr");
    }
  }

  // 다음 달 날짜 표시
  let nextDay = 1;
  while (tr.children.length < 7) {
    let td = document.createElement("td");
    td.textContent = nextDay++;
    td.classList.add("next-month");
    tr.appendChild(td);
  }
  calendarBody.appendChild(tr);
}
renderCalendarTable();

//------------------------------------------------------------------------------------------------------------------------------------------------

// banner_rolling
setInterval(function () { 
  $('.BottomBanner .banner_rolling').animate({ 'margin-left': '-100%' }, function () { 
      $('.BottomBanner .banner_rolling .rolling_x:first').appendTo('.BottomBanner .banner_rolling') 
      $('.BottomBanner .banner_rolling').css({ 'margin-left': '0%' }) 
  })
}, 3000)