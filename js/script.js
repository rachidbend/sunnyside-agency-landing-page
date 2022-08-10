"use strict";

const btnNavEl = document.querySelector(".btn--nav");
const bodyEl = document.querySelector("body");
const mainNavEl = document.querySelector(".nav--main");

const outsidClick = function (e) {
  if (!e.target.closest(".nav--main") && !e.target.closest(".btn--nav")) {
    bodyEl.classList.remove("nav-open");
  }
};

btnNavEl.addEventListener("click", (e) => {
  // Preventing default behavior
  e.preventDefault();
  // toggling class on body to open or close nav
  bodyEl.classList.toggle("nav-open");

  // closing nav if body is clicked, excluding the nav itself and nav button
  bodyEl.addEventListener("click", outsidClick);
  // bodyEl.removeEventListener("click", outsidClick);
});
