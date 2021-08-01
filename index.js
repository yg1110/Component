//index.js
import { Profile } from "./Profile";
require("./style.scss");
require("./style.css");

const pf = new Profile("yg1110", "younggil9488@gmail.com");
console.log(pf.hello());
pf.msgAfterTimeout(100).then((msg) => console.log("Promise\n" + msg));
