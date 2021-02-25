'use strict';
(function () {
  var sliderList = document.querySelector('.slider__list');
  var sliderPrevButton = document.querySelector('.slider__button--prev');
  var sliderNextButton = document.querySelector('.slider__button--next');
  var form = document.querySelector('.form');
  var feedbackPopup = document.querySelector('.feedback__popup');
  var sliderCount = 1;

  // slider
  var clearSliderClasses = function () {
    sliderList.classList.remove('slider__list--slide1');
    sliderList.classList.remove('slider__list--slide2');
    sliderList.classList.remove('slider__list--slide3');
  };

  sliderNextButton.addEventListener('click', function () {
    sliderPrevButton.disabled = false;
    sliderPrevButton.classList.remove('slider__button--disabled');
    clearSliderClasses();
    sliderCount = sliderCount + 1;
    sliderList.classList.add('slider__list--slide' + sliderCount);

    if (sliderCount === 3) {
      sliderNextButton.disabled = true;
      sliderNextButton.classList.add('slider__button--disabled');
    } else {
      sliderNextButton.disabled = false;
      sliderNextButton.classList.remove('slider__button--disabled');
    }
  });

  sliderPrevButton.addEventListener('click', function () {
    sliderNextButton.disabled = false;
    sliderNextButton.classList.remove('slider__button--disabled');
    clearSliderClasses();
    sliderCount = sliderCount - 1;
    sliderList.classList.add('slider__list--slide' + sliderCount);

    if (sliderCount === 1) {
      sliderPrevButton.disabled = true;
      sliderPrevButton.classList.add('slider__button--disabled');
    } else {
      sliderPrevButton.disabled = false;
      sliderPrevButton.classList.remove('slider__button--disabled');
    }
  });

  // popup
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('feedback__popup--active');
  });
})();
