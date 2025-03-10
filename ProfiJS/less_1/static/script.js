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
		if (event.target.classList.contains("_minus") && count.value > 1) {
			count.value--;
		} else if (event.target.classList.contains("_plus")) {
			count.value++;
		}
	}
};

const deleteElement = function (event) {
	if (event.target.classList.contains("_remove")) {
		event.target.closest(".check__body").remove();
	}
};

const checkedItemSelect = (event, response) => {
	if (event.target.classList.contains("check__dish_category")) {
		const parentBlok = event.target.closest(".check__body_dish");
		const valueName = event.target.value;
		const placeInBlock = parentBlok.querySelector(".check__dish_name");
		placeInBlock.innerHTML = `<option value="">Название</option>`;
		renderHtmlInSelect(response[valueName], placeInBlock);
	}
};

const clickBtn = (staticBlock, response) => {
	staticBlock.addEventListener("click", setCountDishes);
	staticBlock.addEventListener("click", deleteElement);
	staticBlock.addEventListener("change", event => {
		checkedItemSelect(event, response);
		event.stopImmediatePropagation();
	});
};

const resetForm = function (btn, element) {
	btn.addEventListener("click", event => {
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
							<select class="check__dish_category" name="dishes${id}">
								<option value="">Выберите блюдо</option>
							</select>
							<select class="check__dish_name" name="dishes_vid${id}">
								<option value="">Название</option>
							</select>
						</div>
						<button type="button" class="count__dish_btn btn _small _plus"></button>
						<input class="count__dish_txt" name = 'count${id}' type="text" value="1" />
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
			patternAddCheckBlock(id);
			const placeInBlock = document
				.getElementById(id)
				.querySelector(".check__dish_category");
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

const btnForm = document.querySelector(".btnForm");
btnForm.addEventListener("click", e => {
	e.preventDefault();
	let data = {};
	let arrayDishClient = [];
	let dishClient = {};
	let counter = 1;

	for (let [key, value] of new FormData(
		document.querySelector(".order__form")
	)) {
		if (key == "client") {
			data[value] = arrayDishClient;
		} else if (key[key.length - 1] == counter) {
			key = key.slice(0, -1);
			dishClient[key] = value;
		} else {
			arrayDishClient.push(dishClient);
			counter += 1;
			dishClient = {};
			key = key.slice(0, -1);
			dishClient[key] = value;
		}
	}
	arrayDishClient.push(dishClient);

	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data, null, 4),
	})
		.then(response => response.json())
		.then(response => {
			console.log("Повара и их специализации:");
			for (let key in response.cook) {
				console.log(`${key} -  специализация: ${response.cook[key]}`);
			}
			console.log("");
			console.log("Блюда и их повара:");
			for (let key in response.client) {
				response.client[key].forEach(order => {
					console.log(
						`${order.dishes} "${order.dishes_vid}" ${order.count} шт. - повар ${order.cook}`
					);
				});
			}
			console.log("");
			console.log("Заказы:");
			for (let key in response.client) {
				console.log(`Клиент: ${key}`);
				response.client[key].forEach(order => {
					console.log(
						`${order.dishes} "${order.dishes_vid}" ${order.count} шт.`
					);
				});
			}
			console.log("");
		});
});

/* Вызовы ф-й */

addOptionHtml();
