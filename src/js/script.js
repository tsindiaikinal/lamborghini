import modernizr from "./modules/modernizr.js";
import choiseCarColor from "./modules/choiceCarColor.js";
import audio from "./modules/audio.js";
import video from "./modules/video.js";
import Swiper, {
  Navigation,
  Pagination,
  Keyboard,
  Lazy,
  Autoplay,
  Mousewheel,
  Scrollbar,
  EffectFade,
  Controller,
} from "swiper";

const swiperImg = new Swiper(".image-slider", {
  modules: [Lazy, Controller],
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  // Navigation arrows
  navigation: false,
});

// init Swiper:
const swiperInfo = new Swiper(".specification-slider", {
  // configure Swiper to use modules
  modules: [Navigation, Lazy, EffectFade, Controller],
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});

// Transfer control between sliders
swiperImg.controller.control = swiperInfo;
swiperInfo.controller.control = swiperImg;

const swiper = new Swiper(".slider", {
  // configure Swiper to use modules
  modules: [
    Navigation,
    Pagination,
    Keyboard,
    Lazy,
    Autoplay,
    Mousewheel,
    Scrollbar,
  ],
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  // Navigation arrows
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
/* ----------------------------- */

const burger = document.querySelector(".icon-menu");

burger.addEventListener("click", dropdownMenu);

function dropdownMenu() {
  this.classList.toggle("icon-close");
  document.querySelector("#main-menu").classList.toggle("show");
}

const mainSearch = document.querySelector("#main-search");
const formSearch = document.querySelector(".form-search");
const iconClose = document.querySelector(".form-search .close-popup");

mainSearch.addEventListener("click", () =>
  formSearch.classList.add("show-popup")
);

iconClose.addEventListener("click", () =>
  formSearch.classList.remove("show-popup")
);
