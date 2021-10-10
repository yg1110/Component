import {store} from "../store";
import {observable, observe} from "./Observer";
import {updateElement} from "../utils/diff";
import {PropsType, StateType} from "../types/Component";

export default class Component {
  #state: StateType = {
    count: 0,
  };

  el: HTMLElement;

  props: PropsType;

  constructor(
    el: HTMLElement,
    props: PropsType = {
      subRoute: null,
    },
  ) {
    this.el = el;
    this.props = props;
    this.setup();
    this.setEvent();
  }

  mounted(): void {}

  setEvent(): void {}

  created(): void {}

  updated(): void {
    this.created();
    this.render();
    this.mounted();
  }

  template(): string {
    return "";
  }

  getState(key: string): number {
    return this.#state[key];
  }

  setState(key: string, value: number): void {
    this.#state[key] = value;
    this.updated();
  }

  setup(): void {
    observable(store.getState()); // state를 관찰한다.
    observe(() => {
      // state가 변경될 경우, 함수가 실행된다.
      this.updated();
    });
  }

  render(): void {
    const {el} = this;

    // 기존 Node를 복제한 후에 새로운 템플릿을 채워넣는다.
    const newNode: HTMLElement = el.cloneNode(true) as HTMLElement;
    newNode.innerHTML = this.template();

    // DIFF알고리즘을 적용한다.
    const oldChildNodes: ChildNode[] = [...el.childNodes];
    const newChildNodes: ChildNode[] = [...newNode.childNodes];
    const max: number = Math.max(oldChildNodes.length, newChildNodes.length);
    for (let i = 0; i < max; i += 1) {
      updateElement(el, newChildNodes[i], oldChildNodes[i]);
    }
  }

  //이벤트 버블링
  addEvent(eventType: string, selector: string, callback) {
    const children: HTMLElement[] = [
      ...this.el.querySelectorAll(selector),
    ] as HTMLElement[];
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = (target: HTMLElement) =>
      children.includes(target) || target.closest(selector);

    this.el.addEventListener(eventType, (currentEvent: PointerEvent) => {
      if (!isTarget(currentEvent.target as HTMLElement)) return false;
      return callback(currentEvent);
    });
  }
}
