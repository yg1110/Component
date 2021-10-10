import Component from "../core/Component";

export default class Count extends Component {
  key: string;

  count: number;

  template() {
    return `
    <div>
        <p>${this.count}</p>
        <button class="increment">증가</button>
        <button class="decrement">감소</button>
    </div>
    `;
  }

  created() {
    this.key = "count";
    this.count = this.getState(this.key);
  }

  setEvent() {
    this.addEvent("click", ".increment", () => {
      this.setState(this.key, this.count + 1);
    });
    this.addEvent("click", ".decrement", () => {
      this.setState(this.key, this.count - 1);
    });
  }
}
