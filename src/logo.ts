import Logotype from "./assets/images/logotype.png";

const logo: HTMLDivElement | null = document.querySelector(".logo");

logo ? (logo.innerHTML = `<img class="logo__img" src="${Logotype}">`) : null;
