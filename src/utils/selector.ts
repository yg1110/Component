// 엘리먼트 검색함수
export function $(key, elemnent = null) {
  if (!key) {
    return false;
  }
  if (!elemnent) {
    return document.querySelector(key);
  } else {
    return elemnent.querySelector(key);
  }
}

// 엘리먼트 삽입함수
export function createComponent(type, element, name = null, component) {
  const dom = document.createElement(type);
  if (!!name) {
    dom.classList.add(name);
  }
  element.appendChild(dom);
  new component(dom);
}

// 모든 자식노드 삭제함수
export function removeAllChild(parent: any) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}
