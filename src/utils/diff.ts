function updateAttributes(oldNode, newNode): void {
  // oldNode와 newNode의 태그 이름(type)이 똑같을 경우(oldNode.type === newNode.type)
  // newNode와 oldNode의 attribute를 비교하여 변경된 부분만 반영한다.
  // oldNode의 attribute 중 newNode에 없는 것은 모두 제거한다.
  // newNode의 attribute에서 변경된 내용만 oldNode의 attribute에 반영한다.
  for (const {name, value} of [...newNode.attributes]) {
    if (!value === oldNode.getAttribute(name)) {
      oldNode.setAttribute(name, value);
    }
  }
  for (const {name} of [...oldNode.attributes]) {
    if (!newNode.getAttribute(name) !== undefined) {
      oldNode.removeAttribute(name);
    }
  }
}

export function updateElement(
  parent: ChildNode,
  newNode: ChildNode,
  oldNode: ChildNode,
): void | null | ChildNode {
  // 1. oldNode만 있는 경우
  // oldNode를 parent에서 제거한다.
  if (!newNode && oldNode) {
    return oldNode.remove();
  }
  // 2. newNode만 있는 경우
  // newNode를 parent에 추가한다.
  if (newNode && !oldNode) return parent.appendChild(newNode) as ChildNode;

  // 3. oldNode와 newNode 모두 text 타입일 경우
  // oldNode의 내용과 newNode의 내용이 다르다면, oldNode의 내용을 newNode의 내용으로 교체한다.
  if (newNode instanceof Text && oldNode instanceof Text) {
    // Text일 경우 nodeValue로 값 비교가 가능하다.
    if (oldNode.nodeValue === newNode.nodeValue) return null;
    oldNode.nodeValue = newNode.nodeValue;
    return null;
  }

  // 4. oldNode와 newNode의 태그 이름이 다를 경우
  // 둘 중에 하나가 String일 경우에도 해당
  // oldNode를 제거하고, 해당 위치에 newNode를 추가한다.
  if (newNode.nodeName !== oldNode.nodeName) {
    const index: number = [...parent.childNodes].indexOf(oldNode);
    oldNode.remove();
    parent.insertBefore(newNode, parent.childNodes[index]);
    return null;
  }

  // 5. oldNode와 newNode의 태그 이름(type)이 같을 경우
  // 가상돔(VirtualDOM)의 props를 넘기는게 아니기 때문에 oldNode와 newNode를 직접 넘긴다.
  updateAttributes(oldNode, newNode);

  // 6. newNode와 oldNode의 모든 자식 태그를 순회하며 1 ~ 5의 내용을 반복한다.
  // 일단 childNodes를 배열로 변환해야한다.
  const newChildren: ChildNode[] = [...newNode.childNodes];
  const oldChildren: ChildNode[] = [...oldNode.childNodes];
  const maxLength: number = Math.max(newChildren.length, oldChildren.length);
  for (let i = 0; i < maxLength; i += 1) {
    updateElement(oldNode, newChildren[i], oldChildren[i]);
  }
  return null;
}
