import SmoothScroll from "smooth-scroll";
import Scrollbar from "smooth-scrollbar";

/* Smooth Mouse Scroll */
Scrollbar.init(document.getElementById("root"));

/* Smooth Scroll Animation*/
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1,
  easing: "easeInQuad",
});
