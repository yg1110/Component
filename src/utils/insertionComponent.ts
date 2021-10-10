import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export function insertionComponent(type, element) {
  switch (type) {
    case "header":
      return new Header(element);
    case "nav":
      return new Nav(element);
    case "footer":
      return new Footer(element);
    default:
      return null;
  }
}
