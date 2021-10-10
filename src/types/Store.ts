type ItemsType = {
  seq: number,
  contents: string,
  active: boolean,
};

export interface InitStateType {
  isFilter?: number;
  items?: ItemsType[];
}

type PayloadType = number | string;
export interface ActionType {
  type?: string;
  payload: PayloadType;
}

export type ReducerAction = (payload: PayloadType) => ActionType;

export type ReduceerType = (
  state?: InitStateType,
  action?: ActionType,
) => InitStateType;

interface FrameRequestCallback {
  (time?: DOMHighResTimeStamp): void;
}

export type ObserverType = (callback: FrameRequestCallback) => void;

export type CallbackType = (callback: void | PointerEvent) => void;
