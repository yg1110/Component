import {createComponent, removeAllChild} from "../utils/selector";
import ItemAppender from "../components/ItemAppender";
import Item from "../components/Item";
import ItemFilter from "../components/ItemFilter";
import Count from "../components/Count";
import {ComponentType} from "../types/Component";

let history: string[] = [];

// 이전경로 호출함수
export const getHistory = (): string | false => {
  if (history.length === 1) {
    return false;
  }
  history = history.slice(0, -1);
  return history[history.length - 1];
};

// 이전경로로 이동후 해당경로가 히스토리에 다시 쌓이기 때문에
// 같은 경로만 계속 바라보게 되는 문제를 해결하기 위해
// 현재경로를 pop시키는 함수입니다.
export const syncHistory = (): void => {
  history.pop();
};

// 이전경로 추가함수
export const addHistory = (value: string): void => {
  history.push(value);
};

export function subRoute(path: string): void {
  const {el}: ComponentType = this;
  removeAllChild(el);

  switch (path) {
    case "/item": {
      createComponent("header", el, "append", ItemAppender);
      createComponent("main", el, "item", Item);
      createComponent("footer", el, "filter", ItemFilter);
      break;
    }
    case "/count": {
      createComponent("div", el, "count", Count);
      break;
    }
    default: {
      break;
    }
  }

  addHistory(path);
}
