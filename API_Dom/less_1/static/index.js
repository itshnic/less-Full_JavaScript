"use strict";
const btn = document.querySelectorAll(".lessons__item-btn");
/* console.log(btn); */

function changeQuantityPeople(element) {
	const parentBlock = element.closest(".lessons__item");
	const countPeopleMaxBlock = parentBlock
		.querySelector(".countPeople_max")
		.querySelector("span");
	const countPeopleRegisteredBlock = parentBlock
		.querySelector(".countPeople_registered")
		.querySelector("span");
	const textInfo = parentBlock.querySelector(".lessons__item-textInfo");
	const idLesson = parentBlock.id;
	let countPeopleRegistered = +countPeopleRegisteredBlock.textContent;

	if (+countPeopleMaxBlock.textContent > countPeopleRegistered) {
		countPeopleRegistered += 1;
		countPeopleRegisteredBlock.textContent = countPeopleRegistered;
	} else {
		if (!countPeopleRegisteredBlock.classList.contains("_red"))
			countPeopleRegisteredBlock.classList.add("_red");
		if (!textInfo.classList.contains("_red")) {
			textInfo.classList.add("_red");
		}
		if (textInfo.classList.contains("_hide")) {
			textInfo.classList.remove("_hide");
		}
	}

	return { id: idLesson, countPeople: countPeopleRegistered };
}

btn.forEach(el => {
	el.addEventListener("click", e => {
		const dataPeople = changeQuantityPeople(e.target);

		fetch("http://localhost:3000/users", {
			method: "POST",
			body: { key: "dataPeople" },
		})
			.then(res => {
				console.log(res.json());
				res.json();
			})
			.then(data => console.log("Успешно:", data))
			.catch(error => console.error("Ошибка:", error));
	});
});
