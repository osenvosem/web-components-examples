import { PopUpInfo } from "./popup-info";
import { ExpandingList } from "./expanding-list";
import { ProgressBar } from "./progress-bar";

import "./styles.css";

customElements.define("popup-info", PopUpInfo);
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
customElements.define("progress-bar", ProgressBar);
