import Component from "../core/Component";
import About from "../components/About";
import Portfolio_2020 from "../components/Portfolio-2020";
import Portfolio_2021 from "../components/Portfolio-2021";
import Skill from "../components/Skill";

export interface PropsType {
  subRoute: (path?: string) => void;
}

export interface StateType {
  count?: number;
}

export type ComponentType = Component;
export type ComponentInstanceType =
  | typeof About
  | typeof Portfolio_2020
  | typeof Portfolio_2021
  | typeof Skill;
