import { container } from "./container";

export function homeComponent() {
  const homeContents = document.createElement("div");
  homeContents.classList.add("home-contents");

  const welcomeHeader = document.createElement("h1");
  welcomeHeader.textContent = "Welcome to the Restaurant";

  const restaurantSummary = document.createElement("p");
  restaurantSummary.textContent =
    "This is the best restaurant that you will ever eat at in your life!";

  homeContents.append(welcomeHeader, restaurantSummary);
  container.append(homeContents);
}
