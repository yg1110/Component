import Component from "./core/Component";
import Item from "./components/Item";
import ItemAppender from "./components/ItemAppender";
import ItemFilter from "./components/ItemFilter";
import Count from "./components/Count";
import Header from "./components/Header";
import {$, template} from "./utils/selecter";
import {Route} from "./router";
export default class App extends Component {
  Item;
  Count;
  Header;
  ItemFilter;
  ItemAppender;

  template() {
    return `
      <div class="header"></div>
      <div class="router-dom"></div>
    `;
  }

  setEvent() {}

  mounted() {
    const {pathname} = window.location;
    const header = $(".header");
    const router = $(".router-dom");
    const route = Route.bind(this);
    new Header(header, {route});
    this.Item = template("main", router, Item);
    this.ItemFilter = template("footer", router, ItemFilter);
    this.ItemAppender = template("header", router, ItemAppender);
    this.Count = template("div", router, Count);
    route(pathname);
  }
}
