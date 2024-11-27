"use strict";
/* const arr = [1, 5, 7, 9];

const min = Math.min(...arr);
console.log(min); */

function count() {
	let countNum = 0;
	return {
		increment() {
			return ++countNum;
		},
		decrement() {
			return --countNum;
		},
		getValue() {
			return countNum;
		},
	};
}
const counter = count();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());
