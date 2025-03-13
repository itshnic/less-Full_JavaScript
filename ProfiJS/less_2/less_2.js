"use strict";
const getDataForm = function () {
	const form = document.querySelector(".reviews");
	form.addEventListener("submit", event => {
		event.preventDefault();
		const dataTxt = new FormData(document.querySelector(".reviews"));
		let reviewsNew = {};
		for (let [key, value] of dataTxt) {
			reviewsNew[key] = value;
		}
		reviewsNew.date = new Date().toJSON().slice(0, 10).replace('/-/g, "/"');
		setReviewsInLocalStorage(reviewsNew);
		form.reset();
	});
};

const setReviewsInLocalStorage = function (reviewsNew) {
	const userName = reviewsNew.user_name;
	let reviews = {};
	if (localStorage.getItem("reviews")) {
		reviews = JSON.parse(localStorage.reviews);
	}
	reviews[userName] = {};
	reviews[userName].text = reviewsNew.reviews_text;
	reviews[userName].date = reviewsNew.date;
	localStorage.reviews = JSON.stringify(reviews);
};
const render = function (obj) {
	const reviewsAllBlock = document.querySelector(".reviews__all");
	const reviewsItemBlock = document.createElement("div");
	reviewsItemBlock.classList.add("reviews-item");

	for (let [key, value] of obj) {
	}
};
getDataForm();
/* localStorage.clear(); */
