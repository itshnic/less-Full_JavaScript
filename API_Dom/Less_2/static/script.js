"use strict";

const btn_left = document.querySelector(".slider__arrow_left");
const btn_right = document.querySelector(".slider__arrow_right");

const classToggle = (itemHtml, modifier, flag) => {
	if (flag == "next") {
		if (
			itemHtml.nextElementSibling &&
			itemHtml.nextElementSibling.getAttribute("id")
		) {
			itemHtml.classList.toggle(modifier);
			itemHtml.nextElementSibling.classList.toggle(modifier);
		}
	}
	if (flag == "previous") {
		if (
			itemHtml.previousElementSibling &&
			itemHtml.previousElementSibling.getAttribute("id")
		) {
			itemHtml.classList.toggle(modifier);
			itemHtml.previousElementSibling.classList.toggle(modifier);
		}
	}
};

const clickBtn = function (btn_name, flag) {
	btn_name.addEventListener("click", e => {
		const item = document.querySelector("._active");
		const bigDot = document.querySelector("._big");

		if (flag == "left") {
			classToggle(item, "_active", "previous");
			classToggle(bigDot, "_big", "previous");
		} else {
			classToggle(item, "_active", "next");
			classToggle(bigDot, "_big", "next");
		}
	});
};
clickBtn(btn_left, "left");
clickBtn(btn_right, "right");
