"use strict";
/* Less_1-1 */
/* const musicCollection = [
	{ title: "Осень", artist: "Чайф", year: "2009" },
	{ title: "Зима", artist: "Звери", year: "2015" },
	{ title: "Лето", artist: "Asti", year: "2018" },
	{ title: "Весна", artist: "Елка", year: "2020" },
];

let iterator = objIterator => {
	objIterator[Symbol.iterator] = function () {
		return {
			index: 0,
			values: Object.values(this),
			next() {
				return this.index < this.values.length
					? { done: false, value: this.values[this.index++] }
					: { done: true };
			},
		};
	};
};

for (const album of musicCollection) {
	iterator(album);
	console.log("");
	for (const el of album) {
		console.log(el);
	}
} */

/* Less_1-2 */

const setCountDishes = function (arrayBtn) {
	arrayBtn.forEach(el => {
		el.addEventListener("click", e => {
			const parent = e.target.closest(".check__body");
			let count = parent.querySelector(".count__dish_txt");
			if (e.target.classList.contains("_minus") && count.value > 1)
				--count.value;
			else if (e.target.classList.contains("_plus")) ++count.value;
		});
	});
};

const resetForm = function (btn, element) {
	btn.addEventListener("click", () => {
		if (element.length) {
			element.forEach(el => {
				el.remove();
			});
		} else element.remove();
	});
};

const deleteElement = function (arrayBtn) {
	arrayBtn.forEach(el => {
		el.addEventListener("click", e => {
			e.target.closest(".check__body").remove();
		});
	});
};

const renderHtmlInSelect = function (data, pattern, placeInBlock) {
	if (Array.isArray(data)) {
		data.forEach(el => {});
	}
};

/* Вызовы ф-й */
setCountDishes(document.querySelectorAll(".count__dish_btn"));
resetForm(
	document.querySelector("button[type='reset']"),
	document.querySelectorAll(".check__body")
);
deleteElement(document.querySelectorAll(".remove__dish_btn"));
