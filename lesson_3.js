"use strict";
/* 1 */
const dropEl = document.querySelectorAll(".dropdown-item");
console.log(dropEl);

dropEl.forEach(el => {
	el.classList.add("super-dropdown");
});
/* 2 */
const btnEl = document.querySelector(".btn");
btnEl.classList.toggle("btn-secondary");
/* 3 */
const menuEl = document.querySelector(".menu");
menuEl.classList.remove("dropdown-menu");
/* 4 */
const divEl = document.querySelector(".dropdown");
const tegA = d;
divEl.insertAdjacentHTML(afterEnd, tegA);
