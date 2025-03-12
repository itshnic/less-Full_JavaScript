"use strict";
const getDataForm = function () {
	const btn = document.querySelector("#send");
	btn.addEventListener("submit", e => {
		e.preventDefault();
		const data = new FormData(document.querySelector(".reviews"));

		for (let [key, value] of data) {
			console.log(key, value);
			console.log("привет");
		}
	});
};
