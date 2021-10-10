import Component from "./core/Component";
import {$} from "./utils/selector";
import Root from "./page/Root";
import NotFound from "./page/NotFound";

export default class App extends Component {
  template() {
    return `
      <div class="router-dom"></div>
    `;
  }

  mounted() {
    const {pathname} = window.location;
    const router: HTMLElement = $(".router-dom");
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
