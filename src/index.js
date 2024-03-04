//import _ from 'lodash';
import "./styles.css";
//import womanDog from './assets/woman-dog.jpg';
import { container } from "./container";
import { homeComponent } from "./home";
import { menuComponent } from "./menu";
import { aboutComponent } from "./about";
import { contactComponent } from "./contact";

const btnHome = document.querySelector("#homeBtn");
const btnMenu = document.querySelector("#menuBtn");
const btnAbout = document.querySelector("#aboutBtn");
const btnContact = document.querySelector("#contactBtn");

(function () {
  homeComponent();
})();

btnHome.addEventListener("click", () => {
  container.textContent = "";
  homeComponent();
});

btnMenu.addEventListener("click", () => {
  container.textContent = "";
  menuComponent();
});

btnAbout.addEventListener("click", () => {
  container.textContent = "";
  aboutComponent();
});

btnContact.addEventListener("click", () => {
  container.textContent = "";
  contactComponent();
});
