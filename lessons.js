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
let num1 = parseFloat(prompt("Введите значение для num1:"));
let num2 = parseFloat(prompt("Введите значение для num2:"));

if (num1 <= 1 && num2 >= 3) {
	console.log("Условия выполнены");
} else {
	console.log("Условия не выполнены");
}

let test = true;
console.log(test == true ? "+++" : "---");

let day = 31;

let period = day <= 10 ? "первая" : day > 10 && day <= 20 ? "вторая" : "третья";
console.log(period);
