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
    const router = $(".router-dom");
    switch (pathname) {
      case "/": {
        new Root(router);
        break;
      }
      default: {
        new NotFound(router);
        break;
      }
    }
  }
}
