"use strict";

const btnNavEl = document.querySelector(".btn--nav");
const bodyEl = document.querySelector("body");
console.log(btnNavEl);
console.log(bodyEl);

btnNavEl.addEventListener("click", (e) => {
  e.preventDefault();
  bodyEl.classList.toggle("nav-open");
  console.log("btn clicked");
});
