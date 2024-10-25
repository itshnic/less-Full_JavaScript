"use strict";
window.onload = () => console.log("страница загрузилась");
document.addEventListener("DOMContentLoaded", () => {
	console.log("все теги прогрузились");
});

document.body.addEventListener("click", e => {
	const elementTarget = e.target;
	const name = elementTarget.tagName.toLowerCase();
	elementTarget.classList.contains("super_element")
		? console.log(`Класс "super_element" присутствует в элементе "div" ${name}`)
		: console.log(`Класса "super_element" нет в элементе "div" ${name}`);
});

const textAr = document.querySelector("textarea");
textAr.addEventListener("mouseover", event => {
	console.log(`Вы навели на ${event.target.tagName.toLowerCase()}`);
});

const tagUl = document.querySelector("ul");
let arrBtn = tagUl.querySelectorAll("button");
arrBtn.forEach(el => {
	el.addEventListener("click", ev => {
		console.log(ev.target.textContent);
	});
});

/* Почему в console.log сначала пишется текст из 5 задания и только потом текст из 3 задания, если мы кликаем по кнопкам в <ul> - так-ка событие тега Ul происходит раньше чем событие тега body */

let arrLi = tagUl.querySelectorAll("li");
arrLi.forEach((element, i) => {
	i % 2 ? (element.style.backgroundColor = "green") : null;
	i++;
});
