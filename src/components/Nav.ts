import Component from "../core/Component";
import "../style/nav.css";

export default class Nav extends Component {
  template() {
    return `
        <ul>
            <li><a href="javascript:void(0);" class="active" rel="js-sub-navigation">2019 ~ 2020</a></li>
            <li><a href="javascript:void(0);" rel="js-sub-navigation">2021</a></li>
            <li><a href="javascript:void(0);" rel="js-sub-navigation">About</a></li>
            <li><a href="javascript:void(0);" rel="js-sub-navigation">Skill</a></li>
            <li><a href="javascript:void(0);" rel="js-sub-navigation">사이트 소개</a></li>
        </ul>
    `;
  }

  created() {
    const {subRoute} = this.props;
    subRoute("/portfolio-2020");
  }

  mounted() {
    const link = document.querySelectorAll("[rel='js-sub-navigation']");

    [...link].forEach((dom: HTMLElement, i: number) => {
      //   if (i === link.length - 1) return;
      dom.addEventListener("click", () => {
        const active: HTMLElement = document.querySelector(".active");

        active.style.pointerEvents = "auto";
        active.classList.remove("active");
        dom.classList.add("active");
        dom.style.pointerEvents = "none";
        this.router(dom.innerText);
      });
    });
  }

  router(path) {
    const {subRoute} = this.props;
    switch (path) {
      case "2019 ~ 2020":
        subRoute("/portfolio-2020");
        break;
      case "2021":
        subRoute("/portfolio-2021");
        break;
      case "About":
        subRoute("/about");
        break;
      case "Skill":
        subRoute("/skill");
        break;
    }
  }
}
