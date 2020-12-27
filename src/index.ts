import { PopUpInfo } from "./popup-info";
import { ExpandingList } from "./expanding-list";

import "./styles.css";

customElements.define("popup-info", PopUpInfo);
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
