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
const ukraineMapRef = document.querySelector(".Ukraine");
const charityRef = document.querySelector(".charityJS");

const renderOblast = (oblastId) => {
  switch (oblastId) {
    case 0:
      console.log("drawing Луцьк");
      charityRef.classList.remove("hidden");
      oblastRender.innerHTML = `<svg width="213" height="226" viewBox="0 0 213 226" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M180.574 18.3468V9.2963H177.582L168.603 7.03367L158.876 4.01683L153.638 1H145.408H136.429L128.199 4.01683H118.472H100.514H85.5496H75.8227L65.3475 11.5589L63.8511 18.3468L61.6064 23.6263L52.6277 31.9226L44.3972 37.202L38.4113 40.2189H33.1738L26.4397 37.202L21.9504 34.1852H11.4752L3.24468 35.6936L1 40.2189L8.48227 60.5825V65.862L3.24468 74.9125V77.9293L11.4752 88.4882L19.7057 99.8013V104.327L24.9433 121.673L30.1809 136.758L35.4184 142.791V147.316H27.9362L24.9433 148.825V154.104L30.1809 162.401L33.1738 169.943L35.4184 175.976L39.9078 178.239L43.6489 182.764L48.1383 185.781L51.8794 181.256L54.8723 179.747L60.8582 182.764V188.798H63.8511L68.3404 193.323L66.0957 196.34L63.8511 198.603V206.145L66.0957 209.916L69.8369 207.653L79.5638 209.916V212.933L84.8014 216.704L88.5425 225L92.2837 221.229H98.2695L108.745 222.737L114.73 225H119.968L125.954 221.229V216.704L123.709 212.933L119.968 209.916V206.145L123.709 203.882V200.111L125.954 194.832L129.695 196.34H137.926V193.323V188.798H145.408V179.747H158.128H162.617H168.603L177.582 185.781H185.064L188.805 181.256V167.68L192.546 165.418L195.539 161.646H200.028L203.021 157.121V148.825H206.014V142.037H212V139.02L210.504 137.512V131.478L208.259 128.461H201.525L200.028 126.953L201.525 120.165L208.259 117.902L210.504 114.131L206.014 106.589L198.532 104.327L195.539 97.5387L192.546 91.5051L191.05 85.4714H185.064H170.848L168.603 70.3872V68.1246V63.5993L172.344 57.5657V51.532L170.848 49.2694L166.358 43.9899V36.4478L172.344 29.6599L176.085 23.6263L180.574 18.3468Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>
</svg><text class="oblast-text">ЛУЦЬК</text>
`;
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
      console.log("drawing Чернігів");
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
      ukraineMapRef.classList.add("hidden");
    },
  },
});