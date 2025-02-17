"use strict";
/* Less_1-1 */
const musicCollection = [
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
}

/* Less_1-2 */

const cook = ["Виктор", "Ольга", "Дмитрий"];
const specialization = ["Pizza", "Sushi", "dessert"];
const dishes = {
	Pizza: ["Маргарита", "Пепперони"],
	Sushi: ["Филадельфия", "Калифорния"],
	dessert: ["Тирамису ", "Чизкейк"],
};
const client = ["Алексей", "Мария", "Ирина"];
