import {store} from "../store";
import {observable, observe} from "./Observer";
import {updateElement} from "../utils/diff";

export default class Component {
  #state = {};
  event = [];
  props;
  $el;

  constructor($el, props = {}) {
    this.$el = $el;
    this.props = props;
    this.setEvent();
    this.setup();
    return this;
  }

  mounted() {}
  setEvent() {}
  created() {}

  updated() {
    this.created();
    this.render();
    this.mounted();
  }

  template() {
    return "";
  }

  getState(key, defalut) {
    if (!this.#state[key]) this.#state[key] = defalut;
    return this.#state[key];
  }

  setState(key, value) {
    this.#state[key] = value;
    this.updated();
  }

  setup() {
    observable(store.getState()); // state를 관찰한다.
    observe(() => {
      // state가 변경될 경우, 함수가 실행된다.
      this.updated();
    });
  }

  render() {
    const {$el} = this;

    // 기존 Node를 복제한 후에 새로운 템플릿을 채워넣는다.
    const newNode = $el.cloneNode(true);
    newNode.innerHTML = this.template();

    // DIFF알고리즘을 적용한다.
    const oldChildNodes = [...$el.childNodes];
    const newChildNodes = [...newNode.childNodes];
    const max = Math.max(oldChildNodes.length, newChildNodes.length);
    for (let i = 0; i < max; i++) {
      updateElement($el, newChildNodes[i], oldChildNodes[i]);
    }
  }

  //이벤트 버블링
  addEvent(eventType, selector, callback) {
    const children = [...this.$el.querySelectorAll(selector)];
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = target =>
      children.includes(target) || target.closest(selector);

    return this.$el.addEventListener(eventType, currentEvent => {
      if (!isTarget(currentEvent.target)) return false;
      callback(currentEvent);
    });
  }
}
