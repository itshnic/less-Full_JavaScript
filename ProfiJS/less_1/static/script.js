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
	console.log(arrayBtn);

	Array.from(arrayBtn).forEach(el => {
		el.addEventListener("click", e => {
			const parent = e.target.closest(".check__body");
			/* console.log(parent); */
			let count = parent.querySelector(".count__dish_txt");
			/* console.log(count.value); */
			if (e.target.classList.contains("_minus") && count.value > 1)
				count.value--;
			else if (e.target.classList.contains("_plus")) count.value++;
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
		e.stopPropagation();
	});
};

const deleteElement = function (arrayBtn) {
	arrayBtn.forEach(el => {
		el.addEventListener("click", e => {
			const block = e.target.closest(".check__body");
			console.log(block);
			block.remove();
			e.stopPropagation();
		});
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
	item.innerHTML = `<button type="button" class="remove__dish_btn btn _small _minus"></button>
						<div class="check__body_dish">
							<select name="category__dishes">
								<option value="">Выберите блюдо</option>
							</select>
							<select name="category__dishes_vid">
								<option value="">Название</option>
							</select>
						</div>
						<button type="button" class="count__dish_btn btn _small _plus"></button>
						<input class="count__dish_txt" type="text" value="1" />
						<button type="button" class="count__dish_btn btn _small _minus"></button>`;
	document.querySelector(".order__check").appendChild(item);
};

const renderHtmlInSelect = function (data, placeInBlock) {
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
			setCountDishes(document.querySelectorAll(".count__dish_btn"));
			resetForm(
				document.querySelector("button[type='reset']"),
				document.querySelectorAll(".check__body")
			);
			deleteElement(document.querySelectorAll(".remove__dish_btn"));
		});
};

const addOptionHtml = function () {
	const addDish = document.querySelector(".add__dish_btn");
	let id = 1;
	addDish.addEventListener("click", e => {
		getDataFromServer("/data", id++);
		e.stopPropagation();
	});
};

/* Вызовы ф-й */

addOptionHtml();
