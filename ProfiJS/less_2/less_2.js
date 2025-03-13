"use strict";
let reviews = [];
let reviewsNew = {};

const contentForm = function () {
	const form = document.querySelector(".reviews");
	form.addEventListener("submit", event => {
		event.preventDefault();
		const dataTxt = new FormData(document.querySelector(".reviews"));
		for (let [key, value] of dataTxt) {
			reviewsNew[key] = value;
		}
		try {
			if (!reviewsNew.name) throw new SyntaxError("Поле Имя пустое");
			if (!reviewsNew.text) throw new SyntaxError("Поле текст пустое");
			if (reviewsNew.text.length > 50)
				throw new SyntaxError("Превышено количество символов");
			reviewsNew.date = new Date().toJSON().slice(0, 10).replace('/-/g, "/"');
			setReviewsInLocalStorage(reviewsNew);
			form.reset();
		} catch (e) {
			alert(e.message);
		}
	});
};

const setReviewsInLocalStorage = function (reviewsNew) {
	if (localStorage.getItem("reviews")) {
		reviews = JSON.parse(localStorage.reviews);
	}
	reviews.push(reviewsNew);
	render(reviews);
	localStorage.reviews = JSON.stringify(reviews);
};
const render = function (arrayReviews) {
	if (arrayReviews.length) {
		const reviewsAllBlock = document.querySelector(".reviews__all");
		reviewsAllBlock.innerHTML = "";
		for (let value of arrayReviews) {
			let reviewsItemBlock = document.createElement("div");
			reviewsItemBlock.classList.add("reviews-item");

			reviewsItemBlock.innerHTML = `<span class="reviews-item__name">${value.name}</span>
		<span class="reviews-item__text">${value.text}</span>
		<span class="reviews-item__date">${value.date}</span>`;
			reviewsAllBlock.append(reviewsItemBlock);
		}
	}
};

if (localStorage.getItem("reviews")) {
	render(JSON.parse(localStorage.reviews));
}
contentForm();

/* localStorage.clear(); */
