import {createStore} from "../core/Store";

// 초기 state의 값을 정의해준다.
const initState = {};

// dispatch에서 사용될 type들을 정의해준다.

// reducer를 정의하여 store에 넘겨준다.
export const store = createStore((state = initState, action: any = {}) => {
  switch (action.type) {
    default:
      return initState;
  }
});

// reducer에서 사용될 action을 정의해준다.
