import Component from "./core/Component";
import Item from "./components/Item";
import ItemAppender from "./components/ItemAppender";
import ItemFilter from "./components/ItemFilter";
import Count from "./components/Count";

export default class App extends Component {
  template() {
    return `
      <header data-component="item-appender"></header>
      <main data-component="items"></main>
      <footer data-component="item-filter"></footer>
      <div data-component="count"></div>
    `;
  }

  mounted() {
    //자식컴포넌트 마운트
    const $itemAppender = this.$el.querySelector(
      '[data-component="item-appender"]',
    );
    const $items = this.$el.querySelector('[data-component="items"]');
    const $itemFilter = this.$el.querySelector(
      '[data-component="item-filter"]',
    );
    const $count = this.$el.querySelector('[data-component="count"]');

    new ItemAppender($itemAppender);
    new Item($items);
    new ItemFilter($itemFilter);
    new Count($count);
  }
}
