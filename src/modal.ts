import Ok from "./assets/images/ok.png";

const modal: HTMLDivElement | null = document.querySelector(".modal");
const inputName: HTMLInputElement | null =
  document.querySelector("input[name=name]");
const inputEmail: HTMLInputElement | null =
  document.querySelector("input[name=email]");

const submitBtn: HTMLDivElement | null = document.querySelector("#submit");

if (modal) {
  modal.innerHTML = `
  <div class="modal__content">
    <img class="modal__img" src="${Ok}" alt="все ок!">
    <span class="modal__text">
      Спасибо! Мы будем держать <br/>
      вас в курсе обновлений
    </span>
  </div>
`;
}

const handleSubmitBtnClick = () => {
  if (inputName?.value?.length || inputEmail?.value?.length) {
    modal?.classList.add("modal--open");
  } else {
    console.log("Обязательные поля не заполнены");
  }
};
const handleModalBtnClick = () => {
  modal?.classList.remove("modal--open");
};

if (submitBtn && modal) {
  submitBtn.addEventListener("click", handleSubmitBtnClick);
  modal.addEventListener("click", handleModalBtnClick);
}
