import _ from "lodash";
import Gsap from "gsap";
import {
  ScrollToPlugin
} from "gsap/ScrollToPlugin";
Gsap.registerPlugin(ScrollToPlugin);

const toTopEl = document.querySelector(".to-top");

function goToTop() {
  Gsap.to(window, .7, {
    scrollTo: {
      y: 0
    }
  });
}

function controlViewOfToTopEl() {
  if (window.scrollY > 500) {
    Gsap.to(toTopEl, .4, {
      translateX: 0
    });
  } else {
    Gsap.to(toTopEl, .4, {
      translateX: 500
    });
  }
}

function observeScroll() {
  window.addEventListener("scroll", _.throttle(controlViewOfToTopEl, 500));
}

function setToTopEl() {
  toTopEl.addEventListener("click", goToTop);
}

function init() {
  observeScroll();
  setToTopEl();
}

init();