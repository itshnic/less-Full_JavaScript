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

const setCountDishes = function (event) {
	if (event.target.classList.contains("count__dish_btn")) {
		let count = event.target
			.closest(".check__body")
			.querySelector(".count__dish_txt");
		if (event.target.classList.contains("_minus") && count.value > 1)
			count.value--;
		else if (event.target.classList.contains("_plus")) count.value++;
	}
};

const deleteElement = function (event) {
	if (event.target.classList.contains("_remove")) {
		event.target.closest(".check__body").remove();
	}
};

const checkedItemSelect = (event, response) => {
	const parentBlok = event.target.closest(".check__body_dish");
	if (parentBlok) {
		const valueName = event.target.value;
		const placeInBlock = parentBlok.querySelector(".check__body_v");
		placeInBlock.innerHTML = "";
		console.log(valueName);
		return [valueName, placeInBlock];
	}
	return null;
};

const clickBtn = (staticBlock, response) => {
	staticBlock.addEventListener("click", setCountDishes);
	staticBlock.addEventListener("click", deleteElement);
	const valueName = staticBlock.addEventListener("input", checkedItemSelect);
	if (valueName) renderHtmlInSelect(response.valueName[0], valueName[1]);
};

const resetForm = function (btn, element) {
	btn.addEventListener("click", () => {
		if (element.length) {
			element.forEach(el => {
				el.remove();
			});
		} else {
			element.remove();
		}
	});
};

const patternAddOptionHtml = function (el, placeInBlock) {
	const item = document.createElement("option");
	item.value = el;
	item.textContent = el;
	placeInBlock.appendChild(item);
};

const patternAddCheckBlock = function (id) {
	const item = document.createElement("div");
	item.className = "check__body";
	item.setAttribute("id", id);
	item.innerHTML = `<button type="button" class="_remove btn _small">-</button>
						<div class="check__body_dish">
							<select class="check__body_d" name="category__dishes">
								<option value="">Выберите блюдо</option>
							</select>
							<select class="check__body_v" name="category__dishes_vid">
								<option value="">Название</option>
							</select>
						</div>
						<button type="button" class="count__dish_btn btn _small _plus"></button>
						<input class="count__dish_txt" type="text" value="1" />
						<button type="button" class="count__dish_btn btn _small _minus"></button>`;
	document.querySelector(".order__check").appendChild(item);
};

const renderHtmlInSelect = function (data, placeInBlock) {
	console.log(placeInBlock);
	console.log(data);
	if (Array.isArray(data)) {
		data.forEach(el => {
			patternAddOptionHtml(el, placeInBlock);
		});
	} else {
		for (const key in data) {
			patternAddOptionHtml(key, placeInBlock);
		}
	}
};

let getDataFromServer = (url, id) => {
	fetch(url)
		.then(response => response.json())
		.then(response => {
			/* 		console.log(response); */
			patternAddCheckBlock(id);
			const placeInBlock = document
				.getElementById(id)
				.querySelector('[name="category__dishes"]');
			/* console.log(placeInBlock); */
			renderHtmlInSelect(response, placeInBlock);

			clickBtn(document.querySelector(".order__check"), response);

			resetForm(
				document.querySelector("button[type='reset']"),
				document.querySelectorAll(".check__body")
			);
		});
};

const addOptionHtml = function () {
	const addDish = document.querySelector(".add__dish_btn");
	let id = 1;
	addDish.addEventListener("click", e => {
		getDataFromServer("/data", id++);
	});
};

/* Вызовы ф-й */

addOptionHtml();
