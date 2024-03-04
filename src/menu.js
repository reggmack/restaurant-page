import { container } from "./container";

export function menuComponent() {
  const menuContents = document.createElement("div");
  menuContents.classList.add("menu-contents");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Restaurant Menu";

  const menuSummary = document.createElement("p");
  menuSummary.textContent = "This is the restaurant menu selections!";

  menuContents.append(menuHeader, menuSummary);
  container.append(menuContents);
}
