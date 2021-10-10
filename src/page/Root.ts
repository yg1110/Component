import Component from "../core/Component";
import Nav from "../components/Nav";
import {subRoute} from "../router";
import {$} from "../utils/selector";

export default class Root extends Component {
  template() {
    return `
      <nav class="nav"></nav>
      <div class="sub-route"></div>
    `;
  }

  mounted() {
    this.$el = $(".sub-route");

    new Nav($("nav"), {
      subRoute: subRoute.bind(this),
    });
  }
}
