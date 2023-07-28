import Door from "./assets/images/door.png";

const formSubtitle: HTMLLinkElement | null =
  document.querySelector(".form__subtitle");

if (formSubtitle) {
  formSubtitle.innerHTML = `
    <img class="form__subtitle-img" src="${Door}">
    <h3 class="form__subtitle-text">Первым 10 клиентам стальная входная дверь в подарок</h3>
`;
}

//поле name
const inputNameWrapper: HTMLUListElement | null =
  document.querySelector(".form__item--name");

const inputName: HTMLInputElement | null =
  document.querySelector("input[name=name]");

const handleNameChange = () => {
  if (inputName && inputNameWrapper) {
    const inputNameWrapperClass = inputNameWrapper
      .getAttribute("class")
      ?.split(" ");

    if (
      inputNameWrapperClass &&
      !inputNameWrapperClass.includes("form__item--filled") &&
      inputName.value.length > 0
    ) {
      inputNameWrapper.classList.add("form__item--filled");
    }

    if (
      inputNameWrapperClass &&
      inputNameWrapperClass.includes("form__item--filled") &&
      inputName.value.length === 0
    ) {
      inputNameWrapper.classList.remove("form__item--filled");
    }
  }
};

if (inputName) {
  inputName.addEventListener("input", handleNameChange);
}

//поле email
const inputEmailWrapper: HTMLUListElement | null =
  document.querySelector(".form__item--email");

const inputEmail: HTMLInputElement | null =
  document.querySelector("input[name=email]");

const handleEmailChange = () => {
  if (inputEmail && inputEmailWrapper) {
    const inputEmailWrapperClass = inputEmailWrapper
      .getAttribute("class")
      ?.split(" ");

    if (
      inputEmailWrapperClass &&
      !inputEmailWrapperClass.includes("form__item--filled") &&
      inputEmail.value.length > 0
    ) {
      inputEmailWrapper.classList.add("form__item--filled");
    }

    if (
      inputEmailWrapperClass &&
      inputEmailWrapperClass.includes("form__item--filled") &&
      inputEmail.value.length === 0
    ) {
      inputEmailWrapper.classList.remove("form__item--filled");
    }
  }
};

if (inputEmail) {
  inputEmail.addEventListener("input", handleEmailChange);
}

//поле tel
const inputTelWrapper: HTMLUListElement | null =
  document.querySelector(".form__item--tel");

const inputTel: HTMLInputElement | null =
  document.querySelector("input[name=tel]");

const handleTelChange = () => {
  if (inputTel && inputTelWrapper) {
    const inputTelWrapperClass = inputTelWrapper
      .getAttribute("class")
      ?.split(" ");

    if (
      inputTelWrapperClass &&
      !inputTelWrapperClass.includes("form__item--filled") &&
      inputTel.value.length > 0
    ) {
      inputTelWrapper.classList.add("form__item--filled");
    }

    if (
      inputTelWrapperClass &&
      inputTelWrapperClass.includes("form__item--filled") &&
      inputTel.value.length === 0
    ) {
      inputTelWrapper.classList.remove("form__item--filled");
    }
  }
};

if (inputTel) {
  inputTel.addEventListener("input", handleTelChange);
}
