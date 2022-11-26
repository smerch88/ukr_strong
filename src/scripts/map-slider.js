// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

const regionButtonsRef = document.querySelectorAll(".swiper-slide");
console.log(regionButtonsRef);
const oblastRender = document.querySelector(".oblastJS");

const renderOblast = (oblastId) => {
  switch (oblastId) {
    case 0:
      console.log("drawing Чернігів");
      break;
    case 1:
      console.log("drawing Миколаїв");
      break;
    case 2:
      console.log("drawing Кіровоград");
      break;
    case 3:
      console.log("drawing Полтава");
      break;
    case 4:
      console.log("drawing Херсон");
      break;
    case 5:
      console.log("drawing Суми");
      break;
    case 6:
      console.log("drawing Крим");
      break;
    case 7:
      console.log("drawing Рівне");
      break;
    case 8:
      console.log("drawing Хмельницький");
      break;
    case 9:
      console.log("drawing Житомир");
      break;
    case 10:
      console.log("drawing Вінниця");
      break;
    case 11:
      console.log("drawing Одеса");
      break;
    case 12:
      console.log("drawing Черкаси");
      break;
    case 13:
      console.log("drawing Ужгород");
      break;
    case 14:
      console.log("drawing Львів");
      break;
    case 15:
      console.log("drawing Івано-Франківськ");
      break;
    case 16:
      console.log("drawing Луцьк");
      break;
    case 17:
      console.log("drawing Тернопіль");
      break;
    case 18:
      console.log("drawing Чернівці");
      break;
    case 19:
      console.log("drawing Дніпро");
      break;
    case 20:
      console.log("drawing Запоріжжя");
      break;
    case 21:
      console.log("drawing Харків");
      break;
    case 22:
      console.log("drawing Донецьк");
      break;
    case 23:
      console.log("drawing Луганськ");
      break;
    case 24:
      console.log("drawing Київ");
      break;
    default:
      console.log("drawing error", oblastId);
  }
};

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 8,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    click(event) {
      console.log("event.target", this.clickedIndex);
      const id = this.clickedIndex;
      renderOblast(id);
    },
  },
});
