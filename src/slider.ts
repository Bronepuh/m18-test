import Slide1 from "./assets/images/slide-1.jpg";
import Slide2 from "./assets/images/slide-2.jpg";
import Slide3 from "./assets/images/slide-3.jpg";
import Arrow from "./assets/images/arrow.png";

const slider: HTMLDivElement | null =
  document.querySelector(".slider__wrapper");

const sliderControlsPrev: HTMLButtonElement | null = document.querySelector(
  ".slider__controls-prev"
);

const sliderControlsNext: HTMLButtonElement | null = document.querySelector(
  ".slider__controls-next"
);

if (slider) {
  slider.innerHTML = `
  <ul class="slider__list">  
    <li class="slider__item">
      <img class="slider__item-img" src="${Slide1}">
      <span class="slider__item-text">
        Кафельная плитка в ванной комнате в скандинавском стиле
      </span>
    </li>
    <li class="slider__item">
      <img class="slider__item-img" src="${Slide2}">
      <span class="slider__item-text">
        Кафельная плитка в ванной комнате в скандинавском стиле
      </span>
    </li>
    <li class="slider__item">
      <img class="slider__item-img" src="${Slide3}">
      <span class="slider__item-text">
        Кафельная плитка в ванной комнате в скандинавском стиле
      </span>
    </li>
  </ul>`;
}

const START_CURRENT_SLIDE = 2;
const START_SLIDER_POSITION = -984;

const sliderList: HTMLElement | null = document.querySelector(".slider__list");
const sliderItem: HTMLElement | null = document.querySelector(".slider__item");
const sliderCount = sliderList?.querySelectorAll("li").length || 0;

let currentSlide = START_CURRENT_SLIDE;
let startSliderPosition = START_SLIDER_POSITION;

const moveSlideLeft = () => {
  if (sliderList && sliderItem && currentSlide > 1) {
    console.log("moveSlideLeft");

    const sliderItemParams = sliderItem.getBoundingClientRect();
    const newPosition = String(startSliderPosition + sliderItemParams.width);
    sliderList.style.left = `${newPosition}px`;
    startSliderPosition = Number(newPosition);
    currentSlide--;
  }
};

const moveSlideRight = () => {
  if (sliderList && sliderItem && currentSlide < sliderCount) {
    const sliderItemParams = sliderItem.getBoundingClientRect();
    const newPosition = String(startSliderPosition - sliderItemParams.width);
    sliderList.style.left = `${newPosition}px`;
    startSliderPosition = Number(newPosition);
    currentSlide++;
  }
};

const handlePrevBtnClick = () => {
  if (sliderList && sliderItem && sliderControlsPrev) {
    moveSlideLeft();
  }
};

const handleNextBtnClick = () => {
  if (sliderList && sliderItem && sliderControlsNext) {
    moveSlideRight();
  }
};

if (sliderControlsPrev) {
  sliderControlsPrev.innerHTML = `<img class="slider__item-img" src="${Arrow}">`;
  sliderControlsPrev.addEventListener("click", handlePrevBtnClick);
}

if (sliderControlsNext) {
  sliderControlsNext.innerHTML = `<img class="slider__item-img" src="${Arrow}">`;
  sliderControlsNext.addEventListener("click", handleNextBtnClick);
}
