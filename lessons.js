"use strict";
console.log("Less - 1");
let t = 10;
let f = (9 / 5) * t + 32;
console.log("Температура в С", t);
console.log("Температура в F", f);

let name = "Роман";
let admin = name;
console.log("Администратор", admin);

console.log("Less - 2");
/* let num1 = parseFloat(prompt("Введите значение для num1:"));
let num2 = parseFloat(prompt("Введите значение для num2:"));

if (num1 <= 1 && num2 >= 3) {
	console.log("Условия выполнены");
} else {
	console.log("Условия не выполнены");
} */

let test = true;
console.log(test == true ? "+++" : "---");

let day = 31;

let period = day <= 10 ? "первая" : day > 10 && day <= 20 ? "вторая" : "третья";
console.log(period);

console.log("Less - 6");

function pow(a) {
	return a ** 3;
}
console.log(pow(3));

function ndfl(summ) {
	if (isNaN(summ)) return "Значение введено не верно!";
	else
		return `Размер заработной платы за вычетом налогов равен:${
			summ - summ * 0.13
		}р.`;
}
console.log(ndfl(100000));
console.log(ndfl("Привет"));

function max_number() {
	let num_1 = parseFloat(prompt("Введите первое число:"));
	let num_2 = parseFloat(prompt("Введите второе число:"));
	let num_3 = parseFloat(prompt("Введите третье число:"));

	return num_1 > num_2 && num_1 > num_3
		? num_1
		: num_2 > num_1 && num_2 > num_3
		? num_2
		: num_3;
}
/* console.log(max_number()); */

let result = function (a, b, action) {
	switch (action) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "*":
			return a * b;
		case "/":
			return b == 0 ? "На ноль делить нельзя!" : a / b;
		default:
			return "Нет такого знака!";
	}
};
console.log(result(1, 0, "/"));

console.log("Less - Finish");

/* №-1 */

const numbers = {
	keyin1: 1,
	keyin2: 2,
	keyin3: 3,
	keyin4: 4,
	keyin5: 5,
	keyin6: 6,
	keyin7: 7,
};

Object.values(numbers).forEach(item => {
	if (item >= 3) console.log(item);
});

/* №-2 */
const post = {
	author: "John", // вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2, // вывести это число
			},
		},
		{
			userId: 5, // вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", // вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1,
			},
		},
	],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

/* №-3 */

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

products.forEach(element => {
	element.price -= element.price * 0.15;
});
console.log(products);

/* №-4 */
const product = [
	{
		id: 3,
		price: 127,
		photos: ["1.jpg", "2.jpg"],
	},
	{
		id: 5,
		price: 499,
		photos: [],
	},
	{
		id: 10,
		price: 26,
		photos: ["3.jpg"],
	},
	{
		id: 8,
		price: 78,
	},
];

console.log(
	product.filter(i => {
		if (i.photos && i.photos.length > 0) return i;
	})
);

const arr = product.slice().sort((a, b) => a.price - b.price);
console.log(arr);
