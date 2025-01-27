"use strict";
const btn = document.querySelectorAll(".lessons__item-btn");
console.log(btn);

btn.forEach(el => {
	el.addEventListener("click", e => {});
});

fetch("your-endpoint", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({ key: "value" }), // Ваши данные для отправки
})
	.then(res => res.json())
	.then(data => console.log("Успешно:", data))
	.catch(error => console.error("Ошибка:", error));
