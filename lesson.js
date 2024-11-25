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
