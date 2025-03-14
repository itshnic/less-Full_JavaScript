"use strict";
let reviews = [];
let reviewsNew = {};

const getContentForm = function (nameClassForm) {
	return new Promise(function (resolve, reject) {
		const dataTxt = new FormData(document.querySelector(`.${nameClassForm}`));
		for (let [key, value] of dataTxt) {
			console.log(key, value);

			if (!value) reject(new SyntaxError(`Поле ${key} пустое`));
			if (value.length >= 50)
				reject(
					new SyntaxError(`В строке ${key} превышено количество символов`)
				);
			reviewsNew[key] = value;
		}
		reviewsNew.date = new Date().toJSON().slice(0, 10).replace('/-/g, "/"');
		resolve(reviewsNew);
	});
};

const addContentForm = function () {
	const form = document.querySelector(".reviews");
	form.addEventListener("submit", event => {
		event.preventDefault();
		let data = getContentForm("reviews");
		data
			.then(response => {
				setReviewsInLocalStorage(response);
				form.reset();
			})
			.catch(e => {
				alert(e.message);
			});
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
			let reviewsItemsBlock = document.createElement("div");
			reviewsItemsBlock.classList.add("reviews-item");
			const arrayKeys = Object.keys(value);
			console.log(arrayKeys);
			arrayKeys.forEach(el => {
				let reviewsItemBlock = document.createElement("span");
				reviewsItemBlock.classList.add(`reviews-item_${el}`);
				reviewsItemBlock.textContent = value[el];
				reviewsItemsBlock.append(reviewsItemBlock);
			});

			let btnDelReview = document.createElement("button");
			btnDelReview.classList.add("btn__del");
			btnDelReview.textContent = "Удалить отзыв";
			reviewsItemsBlock.append(btnDelReview);
			reviewsAllBlock.append(reviewsItemsBlock);
		}
	}
};

if (localStorage.getItem("reviews")) {
	render(JSON.parse(localStorage.reviews));
}

addContentForm();
/* localStorage.clear(); */
