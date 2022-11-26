// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
