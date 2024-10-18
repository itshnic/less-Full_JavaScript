"use strict";
/* 	№ 1 */
const itemId = document.getElementById("super_link");
console.log(itemId);
/* 	№ 2 */
const itemLink = document.querySelectorAll(".card-link");
itemLink.forEach(element => {
	element.textContent = "ссылка";
});
/* 	№ 3 */
const elCardLinkInBody = document.querySelectorAll(".card-body .card-link");
console.log(elCardLinkInBody);
/* 	№ 4 */
console.log(document.querySelector("[data-number='50']"));

/* 	№ 5 */
console.log("Title: " + document.querySelector("title").textContent);
/* 	№ 6 */
const elTitle = document.querySelector(".card-title");
console.log(elTitle.parentElement);
/* 	№ 7 */
const paren = document.querySelector(".card");
const child = document.createElement("p");
child.textContent = "Привет";
paren.appendChild(child);
/* 	№ 8 */
document.querySelector("h6").remove();
