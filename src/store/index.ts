import {createStore} from "../core/Store";
import {InitStateType, ActionType, ReducerAction} from "../types/Store";

// 초기 state의 값을 정의해준다.
const initState: InitStateType = {
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

const initAction: ActionType = {
  type: null,
  payload: null,
};

// dispatch에서 사용될 type들을 정의해준다.
export const ADD_ITEM: string = "ADD_ITEM";
export const SET_FILTER: string = "SET_FILTER";
export const TOGGLE_ITEM: string = "TOGGLE_ITEM";
export const DELETE_ITEM: string = "DELETE_ITEM";

// reducer를 정의하여 store에 넘겨준다.
export const store = createStore((state = initState, action = initAction) => {
  const {items} = state;
  switch (action.type) {
    case ADD_ITEM: {
      const seq: number = Math.max(0, ...items.map(v => v.seq)) + 1;
      const active: boolean = false;
      const contents: string = action.payload as string;
      return {...state, items: [...items, {seq, contents, active}]};
    }
    case TOGGLE_ITEM: {
      const seq: number = action.payload as number;
      const index: number = items.findIndex(v => v.seq === seq);
      items[index].active = !items[index].active;
      return state;
    }
    case DELETE_ITEM: {
      const seq: number = action.payload as number;
      items.splice(
        items.findIndex(v => v.seq === seq),
        1,
      );
      return state;
    }
    case SET_FILTER: {
      const isFilter: number = action.payload as number;
      state.isFilter = isFilter;
      return state;
    }
    default:
      return initState;
  }
});

// reducer에서 사용될 action을 정의해준다.
export const addItem: ReducerAction = payload => ({type: ADD_ITEM, payload});
export const setFilter: ReducerAction = payload => ({
  type: SET_FILTER,
  payload,
});
export const toggleItem: ReducerAction = payload => ({
  type: TOGGLE_ITEM,
  payload,
});
export const deleteItem: ReducerAction = payload => ({
  type: DELETE_ITEM,
  payload,
});
