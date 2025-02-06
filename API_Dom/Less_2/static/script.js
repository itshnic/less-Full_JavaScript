"use strict";
const item = document.querySelector(".slider__item");
/* const items = list.querySelectorAll(".slider__item"); */
const points = document.querySelectorAll(".slider__points");
const btn_left = document.querySelector(".slider__arrow_left");
const btn_right = document.querySelector(".slider__arrow_right");

const clickBtn = function (btn_name, flag) {
	btn_name.addEventListener("click", e => {
		let id = +item.getAttribute("data_id_item");
		id++;
		item.querySelector(".slider__img").getAttribute("src")=`img/foto_${id}.jpg`;
		console.log(id);
	});
};
clickBtn(btn_left);
clickBtn(btn_right);
