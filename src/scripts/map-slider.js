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
      swiper.slideTo(this.clickedIndex);
    },
  },
});

const renderOblast = () => {};
