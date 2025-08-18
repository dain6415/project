export const appData = {
  mv: {
    title: "MV",
    layout: "grid",
    contents: [
      {
        type: "iframe",
        src: "https://www.youtube.com/embed/ZncbtRo7RXs?si=hf7Tf0mUmIbGqaDC",
        title: "‘Supernatural’ Official MV (Part.1)",

      },
      {
        type: "iframe",
        src: "https://www.youtube.com/embed/A4S8zl50AdM?si=rNyqdETgeOMSSb3P",
        title: "‘Supernatural’ Official MV (Part.2)",
      },
      {
        type: "iframe",
        src: "https://www.youtube.com/embed/Q3K0TOvTOno?si=Xe-qLF1aJezMyNQw",
        title: "'How Sweet' Official MV",
      },
      {
        type: "iframe",
        src: "https://www.youtube.com/embed/ft70sAYrFyY?si=tkSE2r65Q8Ts6IwM",
        title: "'Bubble Gum' Official MV",
      },
    ],
  },
  streaming: {
    title: "streaming",
    layout: "list",
    contents: [
      {
        imgSrc: "./img/icon/site/melon.svg",
        alt: "멜론",
        src: "https://www.melon.com/artist/album.htm?artistId=3114174",
        text: "Melon.app",
        size: "2.1MB",
        type: "응용 프로그램",
      },
      {
        imgSrc: "./img/icon/site/spotify.svg",
        alt: "스포티파이",
        src: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
        text: "Spotify.app",
        size: "2.1MB",
        type: "응용 프로그램",
      },
      {
        imgSrc: "./img/icon/site/youtubeMusic.svg",
        alt: "유튜브 뮤직",
        src: "https://www.youtube.com/musicpremium?ybp=ShUIBhIRdW5saW1pdGVkLUItbXVzaWPgAQE%253D",
        text: "YouTube Music.app",
        size: "2.1MB",
        type: "응용 프로그램",
      },
      {
        imgSrc: "./img/icon/site/apple.svg",
        alt: "애플뮤직",
        src: "https://music.apple.com/kr/artist/%EB%89%B4%EC%A7%84%EC%8A%A4/1635469693",
        text: "Apple Music.app",
        size: "2.1MB",
        type: "응용 프로그램",
      },
      {
        imgSrc: "./img/icon/site/genie.svg",
        alt: "지니",
        src: "https://www.genie.co.kr/detail/artistInfo?xxnm=81490206",
        text: "Genie.app",
        size: "2.1MB",
        size: "2.1MB",
        type: "응용 프로그램",
      },
      {
        imgSrc: "./img/icon/site/bugs.svg",
        alt: "벅스",
        src: "https://music.bugs.co.kr/artist/20164333?wl_ref=list_ar_01_search",
        text: "Bugs.app",
        size: "2.1MB",
        type: "응용 프로그램",
      },
      {
        imgSrc: "./img/icon/site/flo.svg",
        alt: "플로",
        src: "https://www.music-flo.com/detail/artist/405655350/track?sortType=POPULARITY&roleType=ALL",
        text: "Flo.app",
        size: "2.1MB",
        type: "응용 프로그램",
      },
      {
        imgSrc: "./img/icon/site/vibe.svg",
        alt: "바이브",
        src: "https://vibe.naver.com/artist/5615371",
        text: "VIBE.app",
        size: "2.1MB",
        type: "응용 프로그램",
      },
    ],
  },
  albums: {
    supernatural: Array.from({ length: 99 }, (_, i) => {
      const num = String(i + 1).padStart(2, "0");
      return {
        src: `./img/photo/Supernatural/NJ_Supernatural_${num}.jpg`,
        alt: `Supernatural_${num}.jpg`,
      };
    }),
    howsweet: Array.from({ length: 60 }, (_, i) => {
      const num = String(i + 1).padStart(2, "0");
      return {
        src: `./img/photo/HowSweet/NJ_HowSweet_${num}.jpg`,
        alt: `HowSweet_${num}.jpg`,
      };
    }),
    bubblegum: Array.from({ length: 60 }, (_, i) => {
      const num = String(i + 1).padStart(2, "0");
      return {
        src: `./img/photo/BubbleGum/NJ_BubbleGum_${num}.jpg`,
        alt: `BubbleGum_${num}.jpg`,
      };
    }),
  },
};
