import Component from "../core/Component";
import {setFilter, store} from "../store";

export default class ItemFilter extends Component {
  template() {
    return `
      <button class="filterBtn" data-is-filter="0">전체 보기</button>
      <button class="filterBtn" data-is-filter="1">활성 보기</button>
      <button class="filterBtn" data-is-filter="2">비활성 보기</button>
    `;
  }

  setEvent() {
    this.addEvent("click", ".filterBtn", ({target}) => {
      const isFilter = Number(target.dataset.isFilter);
      store.dispatch(setFilter(isFilter));
    });
  }
}
