import { app } from "./js/app.js";
import { folder } from "./js/folder.js";
import { pc_gallery } from "./js/pc_gallery.js";

window.addEventListener("load", () => {
  folder();
  app();

  // time ------------------------------
  function getTime() {
    const clock = document.getElementById("clock");

    const time = new Date();
    let hour = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");

    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;

    clock.innerHTML = hour + ":" + minutes;
  }
  getTime();
  setInterval(getTime, 1000);


  //  ------------------------------








  // thumnail형 갤러리 ------------------------------
  const appData = {
    mv: {
      title: "MV",
      layout: "grid",
      contents: [
        {
          type: "ifame",
          src: "https://www.youtube.com/embed/ZncbtRo7RXs?si=hf7Tf0mUmIbGqaDC",
          alt: "‘Supernatural’ Official MV (Part.1)",
        },
        {
          type: "ifame",
          src: "https://www.youtube.com/embed/A4S8zl50AdM?si=rNyqdETgeOMSSb3P",
          alt: "‘Supernatural’ Official MV (Part.2)",
        },
        {
          type: "ifame",
          src: "https://www.youtube.com/embed/Q3K0TOvTOno?si=Xe-qLF1aJezMyNQw",
          alt: "'How Sweet' Official MV",
        },
        {
          type: "ifame",
          src: "https://www.youtube.com/embed/ft70sAYrFyY?si=tkSE2r65Q8Ts6IwM",
          alt: "'Bubble Gum' Official MV",
        },
      ],
    },
    streaming: {
      title: "streaming",
      layout: "list",
      contents: [
        {
          type: "text",
          src: "https://www.melon.com/artist/album.htm?artistId=3114174",
          text: "Melon",
        },
        {
          type: "text",
          src: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
          text: "Spotify",
        },
        {
          type: "text",
          src: "https://www.youtube.com/musicpremium?ybp=ShUIBhIRdW5saW1pdGVkLUItbXVzaWPgAQE%253D",
          text: "YouTube Music",
        },
        {
          type: "text",
          src: "https://music.apple.com/kr/artist/%EB%89%B4%EC%A7%84%EC%8A%A4/1635469693",
          text: "Apple Music",
        },
        {
          type: "text",
          src: "https://www.genie.co.kr/detail/artistInfo?xxnm=81490206",
          text: "Genie",
        },
        {
          type: "text",
          src: "https://music.bugs.co.kr/artist/20164333?wl_ref=list_ar_01_search",
          text: "Bugs",
        },
        {
          type: "text",
          src: "https://www.music-flo.com/detail/artist/405655350/track?sortType=POPULARITY&roleType=ALL",
          text: "Flo",
        },
        {
          type: "text",
          src: "https://vibe.naver.com/artist/5615371",
          text: "VIBE",
        },
      ],
    },
    howSweet_gallery: {
      title: "supernatural_gaallery",
      layout: "grid",
      contents: "",
    },
    supernatural_gaallery: {
      title: "supernatural_gaallery",
      layout: "grid",
      contents: "",
    },
  };

  pc_gallery('bubblegum');

  const appFolder = document.querySelectorAll(".folder");

  const albumTitles = {
    bubblegum: "Bubble_Gum",
    howsweet: "How_Sweet",
    supernatural: "Supernatural",
  };

  appFolder.forEach((folder) => {
    folder.addEventListener("click", () => {
      const albumName = folder.getAttribute("data-album");
      if (albumName) {
        document.querySelector(".folder_title").textContent = albumTitles[albumName] || albumName;
        pc_gallery(albumName);
        document.getElementById("folder").classList.add("on");
      }
    });
  });
});
