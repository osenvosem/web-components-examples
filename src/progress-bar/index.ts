export class ProgressBar extends HTMLElement {
  static get observedAttributes() {
    return ["value"];
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const width = this.getAttribute("width") + "px" ?? "100%";

    const container = document.createElement("div");
    container.classList.add("container");

    const indicatorContainer = document.createElement("div");
    indicatorContainer.classList.add("indicatorContainer");

    const indicator = document.createElement("div");
    indicator.classList.add("indicator");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    const buttonIncrease = document.createElement("button");
    buttonIncrease.textContent = "+";
    buttonIncrease.classList.add('button');
    buttonIncrease.addEventListener('click', () => {
      const value = Number.parseInt(this.getAttribute('value'), 10);
      const totalWidth = Math.round(indicatorContainer.getBoundingClientRect().width);
      const step = Math.round(totalWidth * .1);
      const newValue = value + step;
      
      this.setAttribute("value", (newValue <= totalWidth ? newValue : totalWidth) + 'px');
    })
    const buttonDecrease = document.createElement("button");
    buttonDecrease.textContent = "-";
    buttonDecrease.classList.add('button');
    buttonDecrease.addEventListener('click', () => {
      const value = Number.parseInt(this.getAttribute('value'), 10);
      const totalWidth = Math.round(indicatorContainer.getBoundingClientRect().width);
      const step = Math.round(totalWidth * .1);
      const newValue = value - step;
      this.setAttribute("value", (newValue >= 0 ? newValue : 0) + 'px');
    })

    const style = document.createElement("style");
    style.textContent = `
      .container {
        --elem-height: 10px;
        --elem-width: ${width};
        --elem-border-radius: 10px;
      }
      .indicatorContainer {
        position: relative;
        background-color: #eee;
        height: var(--elem-height);
        width: var(--elem-width);
        border-radius: var(--elem-border-radius);
      } 
      .indicator {
        position: absolute;
        top: 0;
        left: 0;
        height: var(--elem-height);
        background: linear-gradient(to right, #900C3F, #FF5733);
        border-radius: var(--elem-border-radius);
        transition: width .2s ease-out;
      }
      .buttonContainer {
        box-sizing: border-box;
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        padding: 4px;
        margin-bottom: 8px;
      }
      .button {
        width: 100%;
        border: none;
        border-radius: 4px;
        background-color: white;
        box-shadow: 0 0 10px rgba(0,0,0, .1);
        cursor: pointer;
      }
      .button:nth-of-type(2) {
        margin-left: 4px;
      }
    `;

    buttonContainer.append(buttonDecrease, buttonIncrease);
    indicatorContainer.appendChild(indicator);
    container.append(buttonContainer, indicatorContainer);
    shadow.append(style, container);
  }

  connectedCallback() {
    const value = this.getAttribute("value");
    updateIndicatorWidth(this.shadowRoot, value + "px");
  }

  attributeChangedCallback(_: string, __: string, newValue: string) {
    updateIndicatorWidth(this.shadowRoot, newValue);
  }
}

const updateIndicatorWidth = (shadowRoot: ShadowRoot, newValue: string) => {
  const indicator = shadowRoot.querySelector(".indicator") as HTMLDivElement;

  indicator.style.setProperty("width", newValue);
};
