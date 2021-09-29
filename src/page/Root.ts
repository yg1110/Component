import Component from "../core/Component";

import Header from "../components/Header";
import Item from "../components/Item";
import ItemAppender from "../components/ItemAppender";
import ItemFilter from "../components/ItemFilter";
import Count from "../components/Count";
import {subRoute} from "../router";
import {$, template} from "../utils/selecter";

export default class Root extends Component {
  Item;
  Count;
  ItemFilter;
  ItemAppender;
  subRouter;

  template() {
    return `
      <header class="header"></header>
      <div class="sub-route"></div>
    `;
  }

  mounted() {
    const {path} = this.props;
    const header = $(".header");
    const route = subRoute.bind(this);

    this.subRouter = $(".sub-route");
    this.Item = template("main", this.subRouter, Item);
    this.ItemFilter = template("footer", this.subRouter, ItemFilter);
    this.ItemAppender = template("header", this.subRouter, ItemAppender);
    this.Count = template("div", this.subRouter, Count);

    new Header(header, {
      subRoute: route,
    });
  }
}
