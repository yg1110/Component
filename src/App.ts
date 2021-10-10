import Component from "./core/Component";
import Root from "./page/Root";
import {$} from "./utils/selector";
import {insertionComponent} from "./utils/insertionComponent";

import NotFound from "./page/NotFound";
import "./style/style.scss";

export default class App extends Component {
  template() {
    return `
      <header></header>
      <router-view class="router-dom"></router-view>
      <footer></footer>
    `;
  }

  mounted() {
    const {pathname} = window.location;
    const router: HTMLElement = $(".router-dom");

    insertionComponent("header", $("header"));
    insertionComponent("footer", $("footer"));

    switch (pathname) {
      case "/": {
        return new Root(router);
      }
      default: {
        return new NotFound(router);
      }
    }
  }
}
