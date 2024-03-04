import { container } from "./container";

export function aboutComponent() {
  const aboutContents = document.createElement("div");
  aboutContents.classList.add("about-contents");

  const aboutHeader = document.createElement("h1");
  aboutHeader.textContent = "About the Restaurant";

  const aboutSummary = document.createElement("p");
  aboutSummary.textContent = "This is all about the restaurant!";

  aboutContents.append(aboutHeader, aboutSummary);
  container.append(aboutContents);
}
