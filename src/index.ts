//FONTS
import "./assets/fonts/Roboto-Regular.ttf";
import "./assets/fonts/Muller-Medium.ttf";
import "./assets/fonts/Muller-Regular.ttf";

//COMPONENTS
import "./logo";
import "./welcome";

//STYLES
import "./styles/index.scss";

const app: HTMLElement | null = document.getElementById("app");

const greeting = "Hello World";

app
  ? (app.innerHTML = `
    <strong class="main-title logo">
        ${greeting}. Тут будет приложение!
    </strong>
`)
  : null;
