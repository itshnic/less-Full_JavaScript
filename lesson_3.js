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
/* const tegA = document.createElement("a");
tegA.setAttribute("link", "#"); */
/* divEl.insertAdjacentHTML("afterEnd", tegA); */
divEl.insertAdjacentHTML("afterEnd", '<a href="#">link</a>');
/* 5 */
const idEl = document.querySelector("#dropdownMenuButton");
idEl.setAttribute("id", "superDropdown");
/* 6 */
