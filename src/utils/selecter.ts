// 엘리먼트 검색함수
export function $(key) {
  if (!key) {
    return false;
  }
  return document.querySelector(key);
}

// 초기 template함수에 있는 엘리먼트들에 컴포넌트를 삽입하는 함수
// 선언시 삽입을 진행하고, 호출시 컴포넌트 라이프사이클이 실행됩니다.
export function template(type, element, component) {
  const dom = document.createElement(type);
  return () => {
    element.appendChild(dom);
    new component(dom);
  };
}

// 모든 자식노드 삭제함수
export function removeAllChild(parent: any) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}
