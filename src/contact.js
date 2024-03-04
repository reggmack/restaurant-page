import { container } from "./container";

export function contactComponent() {
  const contactContents = document.createElement("div");
  contactContents.classList.add("contact-contents");

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Contact Us!";

  const contactSummary = document.createElement("p");
  contactSummary.textContent = "This is how you contact the Restaurant!";

  contactContents.append(contactHeader, contactSummary);
  container.append(contactContents);
}
