import {debounceFrame} from "../utils/debounceFrame";

let currentObserver = null;

export const observe = callback => {
  // observe에 등록한 함수(render)를 모든 컴포넌트에서 실행
  currentObserver = debounceFrame(callback);
  callback();
  currentObserver = null;
};

export const observable = obj => {
  // observable에 등록한 변수(store.state)를 순회
  Object.keys(obj).forEach(key => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      // observable에 등록한 변수(store.state)를 호출할 경우
      get() {
        // 현재 변수가 observer 컬렉션에 존재하지 않을경우 추가
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },
      // observable에 등록한 변수(store.state)가 변경할 경우
      set(value) {
        _value = value;
        // observer 컬렉션에 새로운 값이 추가될경우 observe에 등록한 함수 실행
        // 현재 코드에서는 store.state에 값이 추가될경우
        observers.forEach((callback: any) => callback());
      },
    });
  });
  return obj;
};
