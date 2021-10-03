import Component from "../core/Component";
import {toggleItem, deleteItem, store} from "../store";

export default class Items extends Component {
  template() {
    const {filteredItems} = this;
    return `
      <ul>
        ${filteredItems
          .map(
            ({contents, active, seq}) => `
          <li data-seq="${seq}">
            ${contents}
            <button class="toggleBtn" style="color: ${
              active ? "#09F" : "#F09"
            }">
              ${active ? "활성" : "비활성"}
            </button>
            <button class="deleteBtn">삭제</button>
          </li>
        `,
          )
          .join("")}
      </ul>
    `;
  }

  get filteredItems() {
    const {isFilter, items} = store.getState();
    return items.filter(
      ({active}) =>
        (isFilter === 1 && active) ||
        (isFilter === 2 && !active) ||
        isFilter === 0,
    );
  }

  setEvent() {
    this.addEvent("click", ".deleteBtn", ({target}) => {
      const seq = Number(target.closest("[data-seq]").dataset.seq);
      store.dispatch(deleteItem(seq));
    });

    this.addEvent("click", ".toggleBtn", ({target}) => {
      const seq = Number(target.closest("[data-seq]").dataset.seq);
      store.dispatch(toggleItem(seq));
    });
  }
}
