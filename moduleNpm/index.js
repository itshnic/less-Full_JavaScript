"use strict";
function summa(...numbers) {
	let result = 0;
	if (!numbers.length) console.log("Аргументы не заданы!!!");
	else if (numbers.length == 1) result = num[0];
	else {
		for (let index = 0; index < numbers.length; index++) {
			result += numbers[index];
		}
	}
	return result;
}
function difference(...numbers) {
	let result = 0;
	if (!numbers.length) console.log("Аргументы не заданы!!!");
	else if (numbers.length == 1) result = num[0];
	else {
		result = numbers[0];
		for (let index = 1; index < numbers.length; index++) {
			result -= numbers[index];
		}
	}
	return result;
}
function multiplication(...numbers) {
	let result = 0;
	if (!numbers.length) console.log("Аргументы не заданы!!!");
	else if (numbers.length == 1) result = num[0];
	else {
		result = numbers[0];
		for (let index = 1; index < numbers.length; index++) {
			result *= numbers[index];
		}
	}
	return result;
}
function numberInDegree(number, degree) {
	let result = 0;
	if (degree == 0) result = 1;
	else if (degree == 1) result = number;
	else {
		result = number * number;
	}
	return result;
}
module.exports = {
	summa,
	difference,
	multiplication,
	numberInDegree,
};
