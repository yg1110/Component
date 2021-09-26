import Component from "../core/Component";
import {addItem, store} from "../store";

export default class ItemAppender extends Component {
  template() {
    return `<input type="text" class="appender" placeholder="아이템 내용 입력" />`;
  }

  setEvent() {
    this.addEvent("keyup", ".appender", ({key, target}) => {
      if (key !== "Enter") return;
      store.dispatch(addItem(target.value));
      target.value = "";
    });
  }
}
