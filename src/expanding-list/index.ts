export class ExpandingList extends HTMLUListElement {
  constructor() {
    super();

    const ULs = this.querySelectorAll("ul");
    ULs.forEach((ul) => (ul.style.display = "none"));

    const LIs = this.querySelectorAll("li");
    LIs.forEach((li) => {
      const ul: HTMLUListElement | null = li.querySelector(":scope > ul");

      if (ul) {
        const text = li.childNodes[0];

        const span = document.createElement("span");
        span.style.setProperty("font-weight", "bold");
        span.style.setProperty("cursor", "pointer");
        span.textContent = li.firstChild.textContent;
        span.style.setProperty("user-select", "none");
        span.style.setProperty("text-decoration", "underline");
        span.addEventListener("click", () => {
          if (ul.style.getPropertyValue("display") === "none") {
            ul.style.removeProperty("display");
            span.style.setProperty("font-style", "italic");
          } else {
            ul.style.setProperty("display", "none");
            span.style.removeProperty("font-style");
          }
        });

        li.insertBefore(span, text);
        li.removeChild(text);
      }
    });
  }
}
