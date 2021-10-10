import Component from "../core/Component";

export default class Footer extends Component {
  template() {
    return `
    <div>
        <p>Copyright &copy; 2021 yg1110.</p>
        <div class="footer-icon">
            <a href="https://yg1110.tistory.com/" title="tistory">
                <i class="fa fa-tumblr"></i>
            </a>
            <a href="https://github.com/yg1110" title="GitHub">
                <i class="fa fa-github"></i>
            </a>
            <a href="mailto:younggil9488@gmail.com" title="email">
                <i class="fa fa-envelope"></i>
            </a>
        </div>
    </div>
    `;
  }
}
