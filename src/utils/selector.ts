import {ComponentInstanceType} from "../types/component";
// 엘리먼트 검색함수
export function $(key: string, elemnent?: HTMLElement) {
  if (!key) {
    return null;
  }
  if (!elemnent) {
    return document.querySelector(key) as HTMLElement;
  } else {
    return elemnent.querySelector(key) as HTMLElement;
  }
}

// 엘리먼트 삽입함수
export function createComponent(
  type: string,
  element: HTMLElement,
  name: string,
  Component: ComponentInstanceType,
) {
  const dom: HTMLElement = document.createElement(type);
  if (name) {
    dom.classList.add(name);
  }
  element.appendChild(dom);
  new Component(dom);
}

// 모든 자식노드 삭제함수
export function removeAllChild(parent: HTMLElement): void {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}
