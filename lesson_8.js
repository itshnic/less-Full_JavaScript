"use strict";
const container = document.querySelector(".box__cards");
const cartList = document.querySelector(".cart__list");

fetch("data.json")
	.then(response => response.json())
	.then(jsonData => {
		jsonData.forEach(el => {
			addBlock(el);
		});

		const cards = container.querySelectorAll(".card");
		cards.forEach(el => {
			el.addEventListener("click", e => {
				const id = searchIdByClick(e);

				let elCart = checkElToCart(id, cartList);

				if (elCart) countUp(elCart);
				else {
					jsonData.forEach(el => {
						if (el.id == id) {
							addBlockCartList(el);

							/* 		e.forEach(el => {
									el.addEventListener("click", e => {
										console.log(e.target);
										countUp(parentBlock);
									});
								}); */
						}
					});
				}

				document.querySelectorAll(".cart__item").forEach(el => {
					el.addEventListener("click", e => {
						if (e.target.className == "cart__btn_plus") countUp(el);
						if (e.target.className == "cart__btn_minus") countDown(el);
					});
				});
			});
		});
	});

function searchIdByClick(e) {
	const parentBlock = e.target.offsetParent;
	const id = parentBlock.querySelector(".card__id").textContent.split(" ");
	return id[id.length - 1];
}
function checkElToCart(id, cart) {
	const elAll = cart.querySelectorAll(".cart__item");
	let cartElement = false;
	elAll.forEach(el => {
		const cartId = el.querySelector(".cart__id").textContent;
		if (cartId == id) cartElement = el;
	});
	return cartElement;
}
function countUp(el) {
	el.querySelector(".cart__count").textContent++;
}

function countDown(el) {
	let count = el.querySelector(".cart__count").textContent;
	if (count <= 1) el.remove();
	else el.querySelector(".cart__count").textContent--;
}

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
function addBlockCartList(el) {
	const cartItem = document.createElement("li");
	cartItem.classList.add("cart__item");
	cartList.appendChild(cartItem);

	const cartId = document.createElement("span");
	cartId.classList.add("cart__id");
	cartId.textContent = `${el.id}`;
	cartItem.appendChild(cartId);

	const cartTitle = document.createElement("h4");
	cartTitle.classList.add("cart__title");
	cartTitle.textContent = el.title.toUpperCase();
	cartItem.appendChild(cartTitle);

	const cartImg = document.createElement("img");
	cartImg.setAttribute("src", el.img_link);
	cartImg.setAttribute("alt", "foto");
	cartItem.appendChild(cartImg);

	const cartBtn = document.createElement("div");
	cartBtn.classList.add("cart__btn");
	cartItem.appendChild(cartBtn);

	const cartCount = document.createElement("span");
	cartCount.classList.add("cart__count");
	cartCount.textContent = 1;
	cartBtn.appendChild(cartCount);

	const cartBtnPlus = document.createElement("span");
	cartBtnPlus.classList.add("cart__btn_plus");
	cartBtnPlus.textContent = "+";
	cartBtn.appendChild(cartBtnPlus);

	const cartBtnMinus = document.createElement("span");
	cartBtnMinus.classList.add("cart__btn_minus");
	cartBtn.appendChild(cartBtnMinus);
}
