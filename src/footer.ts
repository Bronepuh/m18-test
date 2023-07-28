import Facebook from "./assets/images/facebook.png";
import Vk from "./assets/images/vk.png";
import Instagram from "./assets/images/instagram.png";
import Phone from "./assets/images/phone.png";
import Email from "./assets/images/email.png";

const socialList: HTMLDivElement | null =
  document.querySelector(".social__list");

if (socialList) {
  socialList.innerHTML = `
    <li class="social__item">
    <img
      class="social__item-img"
      src="${Facebook}"
      alt="facebook"
    />
    </li>
    <li class="social__item">
      <img
        class="social__item-img"
        src="${Vk}"
        alt="vk"
      />
    </li>
    <li class="social__item">
      <img
        class="social__item-img"
        src="${Instagram}"
        alt="instagram"
      />
    </li>
`;
}

const contactsList: HTMLDivElement | null =
  document.querySelector(".contacts__list");

if (contactsList) {
  contactsList.innerHTML = `
  <li class="contacts__item">
    <a href="tel:+78129035445">
      <img
        class="contacts__item-img"
        src="${Phone}"
        alt="phone"        
      />
      <div class="contacts__item-text">+7 (812) 903-54-45</div>
    </a>
  </li>
  <li class="contacts__item contacts__item--info">
    <span>Ул. Галерная, д 55,</span>
    <span>Санкт-Петербург</span>
  </li>
  <li class="contacts__item contacts__item--bordered">
    <a href="mailto:9035445@gmail.com">
      <img
        class="contacts__item-img"
        src="${Email}"
        alt="email"
      />
      <div class="contacts__item-text">9035445@gmail.com</div>
    </a>
  </li>
`;
}
