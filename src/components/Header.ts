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

  setEvent() {
    const {route} = this.props; //App에 있는 routing함수 바인딩
    this.addEvent("click", ".item", () => {
      route("/item");
    });

    this.addEvent("click", ".count", () => {
      route("/count");
    });

    this.addEvent("click", ".back", () => {
      const path = getHistory();
      if (path) route(path);
      syncHistory();
    });
  }
}
