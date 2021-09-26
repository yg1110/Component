import {createStore} from "../core/Store";

// 초기 state의 값을 정의해준다.
const initState = {
  isFilter: 0,
  items: [
    {
      seq: 1,
      contents: "item1",
      active: false,
    },
    {
      seq: 2,
      contents: "item2",
      active: true,
    },
  ],
};

// dispatch에서 사용될 type들을 정의해준다.
export const ADD_ITEM = "ADD_ITEM";
export const SET_FILTER = "SET_FILTER";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

// reducer를 정의하여 store에 넘겨준다.
export const store = createStore((state = initState, action: any = {}) => {
  const {items} = state;
  switch (action.type) {
    case ADD_ITEM: {
      const seq = Math.max(0, ...items.map(v => v.seq)) + 1;
      const active = false;
      const contents = action.payload;
      return {...state, items: [...items, {seq, contents, active}]};
    }
    case TOGGLE_ITEM: {
      const seq = action.payload;
      const index = items.findIndex(v => v.seq === seq);
      items[index].active = !items[index].active;
      return state;
    }
    case DELETE_ITEM: {
      const seq = action.payload;
      items.splice(
        items.findIndex(v => v.seq === seq),
        1,
      );
      return state;
    }
    case SET_FILTER: {
      const isFilter = action.payload;
      state.isFilter = isFilter;
      return state;
    }
    default:
      return initState;
  }
});

// reducer에서 사용될 action을 정의해준다.
export const addItem = payload => ({type: ADD_ITEM, payload});
export const setFilter = payload => ({type: SET_FILTER, payload});
export const toggleItem = payload => ({type: TOGGLE_ITEM, payload});
export const deleteItem = payload => ({type: DELETE_ITEM, payload});
