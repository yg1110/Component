import Component from "../core/Component";
import Header from "../components/Header";
import {subRoute} from "../router";
import {$} from "../utils/selector";

export default class Root extends Component {
  template() {
    return `
      <header class="header"></header>
      <div class="sub-route"></div>
    `;
  }

  mounted() {
    const header = $(".header");
    this.el = $(".sub-route");

    new Header(header, {
      subRoute: subRoute.bind(this),
    });
  }
}
