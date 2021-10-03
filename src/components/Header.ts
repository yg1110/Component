import Component from "../core/Component";
import {getHistory, syncHistory} from "../router";

export default class Header extends Component {
  template() {
    return `
        <button class="item">Item</button>
        <button class="count">Count</button>
        <button class="back">이전</button>
    `;
  }

  created() {
    const {subRoute} = this.props;
    subRoute("/item");
  }

  setEvent() {
    const {subRoute} = this.props;
    this.addEvent("click", ".item", () => {
      subRoute("/item");
    });

    this.addEvent("click", ".count", () => {
      subRoute("/count");
    });

    this.addEvent("click", ".back", () => {
      const path = getHistory();
      if (path) {
        subRoute(path);
      }
      syncHistory();
    });
  }
}
