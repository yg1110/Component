import {removeAllChild} from "../utils/selecter";
let history = [];

// 이전경로 호출함수
export const getHistory = () => {
  if (history.length === 1) {
    return false;
  }
  history = history.slice(0, -1);
  return history[history.length - 1];
};

// 이전경로로 이동후 해당경로가 히스토리에 다시 쌓이기 때문에
// 같은 경로만 계속 바라보게 되는 문제를 해결하기 위해
// 현재경로를 pop시키는 함수입니다.
export const syncHistory = () => {
  history.pop();
};

// 이전경로 추가함수
export const addHistory = value => {
  history.push(value);
};

export function subRoute(path) {
  removeAllChild(this.subRouter);
  switch (path) {
    case "/item": {
      this.ItemAppender();
      this.Item();
      this.ItemFilter();
      break;
    }
    case "/count": {
      this.Count();
      break;
    }
    default: {
      break;
    }
  }

  addHistory(path);
}
