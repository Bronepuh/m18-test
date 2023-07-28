import Arrows from "./assets/images/arrows.png";
import Promo from "./assets/images/promo.jpg";
import Phone from "./assets/images/phone.png";
import Play from "./assets/images/play.png";

const welcomeLink: HTMLLinkElement | null =
  document.querySelector(".welcome__link");
const promo: HTMLDivElement | null = document.querySelector(".welcome__right");

if (welcomeLink) {
  welcomeLink.innerHTML = `
    <img class="welcome__link-img" src="${Arrows}">
    <span class="welcome__link-text">Листайте вниз, чтобы ничего не упустить</span>
`;
}

if (promo) {
  promo.style.background = `center / cover no-repeat url(${Promo})`;
  promo.innerHTML = `
  <a href="#footer-section" class="promo__link">
    <img class="promo__link-img" src="${Phone}">
    <span class="promo__link-text">Контакты</span>
  </a>
  <div class="promo__play">
    <img class="promo__play-img" src="${Play}">
    <span class="promo__play-text">Смотреть видео</span>
  </div>`;
}
