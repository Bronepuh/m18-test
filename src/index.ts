//FONTS
import "./assets/fonts/Roboto-Regular.ttf";
import "./assets/fonts/Muller-Medium.ttf";
import "./assets/fonts/Muller-Regular.ttf";

//COMPONENTS
import "./logo";
import "./welcome";
import "./slider";
import "./form";
import "./footer";
import "./modal";

//STYLES
import "./styles/index.scss";

const app: HTMLElement | null = document.getElementById("app");

const greeting = "Hello World";

app
  ? (app.innerHTML = `
    <strong class="main-title">
        ${greeting}. Тут будет приложение
    </strong>
`)
  : null;
