"use strict";
const container = document.querySelector(".box__cards");

fetch("data.json")
	.then(response => response.json())
	.then(jsonData => jsonData.forEach(el => addBlock(el)));

function addBlock(el) {
	const card = document.createElement("li");
	card.classList.add("card");
	container.appendChild(card);

	const img = document.createElement("img");
	img.setAttribute("src", el.img_link);
	img.setAttribute("alt", "foto");
	card.appendChild(img);

	const cardInfo = document.createElement("div");
	cardInfo.classList.add("card__info");
	card.appendChild(cardInfo);

	const cardTitle = document.createElement("h3");
	cardTitle.classList.add("card__title");
	cardTitle.textContent = el.title.toUpperCase();
	cardInfo.appendChild(cardTitle);

	const cardTxt = document.createElement("p");
	cardTxt.classList.add("card__txt");
	cardTxt.textContent = el.text;
	cardInfo.appendChild(cardTxt);

	const cardPrice = document.createElement("span");
	cardPrice.classList.add("card__price");
	cardPrice.textContent = `$${parseFloat(el.price).toFixed(2)}`;
	cardInfo.appendChild(cardPrice);

	const cardId = document.createElement("span");
	cardId.classList.add("card__id");
	cardId.textContent = `арт. ${el.id}`;
	cardInfo.appendChild(cardId);
}
