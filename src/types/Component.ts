import Component from "../core/Component";
import ItemAppender from "../components/ItemAppender";
import Item from "../components/Item";
import ItemFilter from "../components/ItemFilter";
import Count from "../components/Count";

export interface PropsType {
  subRoute: (path?: string) => void;
}

export interface StateType {
  count?: number;
}

export type ComponentType = Component;
export type ComponentInstanceType =
  | typeof ItemAppender
  | typeof Item
  | typeof ItemFilter
  | typeof Count;
