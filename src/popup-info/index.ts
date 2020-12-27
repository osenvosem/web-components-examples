import image from "./info.svg";

export class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // container
    const container = document.createElement("span");
    container.setAttribute("class", "container");

    // icon
    const icon = container.appendChild(document.createElement("span"));
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", "0");

    // image
    const img = icon.appendChild(document.createElement("img"));
    img.setAttribute("src", this.getAttribute("img") ?? image);

    // info pop-up
    const info = container.appendChild(document.createElement("span"));
    info.setAttribute("class", "info");
    info.classList.add("arrow-down");
    info.textContent = this.getAttribute("text");

    // static styles
    const style = document.createElement("style");
    style.textContent = `
      .container {
        --info-popup-arrow-width: 5px;

        display: inline-flex;
        position: relative;
        width: 2em;
        height: 2em;
        justify-content: center;
        align-items: center;
      } 
      .container:hover .info {
        display: inline-block;
        position: absolute;
        top: -2em;
        padding: 4px 8px;
        width: max-content;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0 4px 16px rgba(0,0,0, .1);
      }
      .icon > img {
        width: 1em;
        height: 1em;
      }
      .info {
        display: none;
      }
      .arrow-up::after {
        content: '';
        position: absolute;
        top: calc(var(--info-popup-arrow-width) * -1);
        left: calc(50% - var(--info-popup-arrow-width));
        width: 0;
        height: 0;
        border-left: var(--info-popup-arrow-width) solid transparent;
        border-right: var(--info-popup-arrow-width) solid transparent;
        border-bottom: var(--info-popup-arrow-width) solid white;
      }
      .arrow-down::after {
        content: '';
        position: absolute;
        bottom: calc(var(--info-popup-arrow-width) * -1);
        left: calc(50% - var(--info-popup-arrow-width));
        width: 0;
        height: 0;
        border-left: var(--info-popup-arrow-width) solid transparent;
        border-right: var(--info-popup-arrow-width) solid transparent;
        border-top: var(--info-popup-arrow-width) solid white;
      }
    `;

    shadow.append(style, container);

    // the info element is shown above the icon by default
    // but if there is no room above for the element
    // it will be show below
    container.addEventListener("mouseover", () => {
      const { top: iconTop } = icon.getBoundingClientRect();
      const { height: infoHeight } = info.getBoundingClientRect();
      if (infoHeight > iconTop) {
        info.style.setProperty("top", "auto");
        info.style.setProperty("bottom", "-2em");
        info.classList.remove('arrow-down');
        info.classList.add('arrow-up');
      }
    });
  }
}
