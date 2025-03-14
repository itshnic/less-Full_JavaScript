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
				sortReviews(document.querySelectorAll(".reviews-item"));
				deleteReviews();
				form.reset();
			})
			.catch(e => {
				alert(e.message);
			});
	});
};

const setReviewsInLocalStorage = function (reviewsNew) {
	let id = 0;
	if (localStorage.getItem("reviews")) {
		reviews = JSON.parse(localStorage.reviews);
		id = reviews[reviews.length - 1].id;
	}
	reviewsNew.id = ++id;
	reviews.push(reviewsNew);
	render(reviews);
	localStorage.reviews = JSON.stringify(reviews);
};
const render = function (arrayReviews) {
	console.log(arrayReviews);
	if (arrayReviews.length) {
		const reviewsAllBlock = document.querySelector(".reviews__all");
		reviewsAllBlock.innerHTML = "";
		for (let value of arrayReviews) {
			let reviewsItemsBlock = document.createElement("div");
			reviewsItemsBlock.classList.add("reviews-item");
			reviewsItemsBlock.setAttribute("id", value.id);
			const arrayKeys = Object.keys(value);
			arrayKeys.forEach(el => {
				if (el != "id") {
					let reviewsItemBlock = document.createElement("span");
					reviewsItemBlock.classList.add(`reviews-item_${el}`);
					reviewsItemBlock.textContent = value[el];
					reviewsItemsBlock.append(reviewsItemBlock);
				}
			});

			let btnDelReview = document.createElement("button");
			btnDelReview.classList.add("btn__del");
			btnDelReview.textContent = "Удалить отзыв";
			reviewsItemsBlock.append(btnDelReview);
			reviewsAllBlock.append(reviewsItemsBlock);
		}
	}
};

const sortReviews = function (arrayItemsBlock) {
	if (arrayItemsBlock.length) {
		const btnSortOff = document.querySelector(".sortOff");
		arrayItemsBlock.forEach(el => {
			el.addEventListener("click", e => {
				if (e.target.classList.contains("reviews-item_product_name")) {
					const name = e.target.textContent;
					arrayItemsBlock.forEach(item => {
						const itemProductName = item.querySelector(
							".reviews-item_product_name"
						);
						if (itemProductName.textContent != name) {
							item.classList.add("_hidden");
						}
					});
					btnSortOff.classList.remove("_hidden");
				}
			});
		});
		btnSortOff.addEventListener("click", () => {
			arrayItemsBlock.forEach(el => {
				if (el.classList.contains("_hidden")) {
					el.classList.remove("_hidden");
					btnSortOff.classList.add("_hidden");
				}
			});
		});
	}
};

const deleteReviews = function () {
	const btnDel = document.querySelectorAll(".btn__del");
	btnDel.forEach(el => {
		el.addEventListener("click", e => {
			e.stopPropagation();
			const parentBlock = e.target.closest(".reviews-item");
			const id = parentBlock.getAttribute("id");

			let reviews = JSON.parse(localStorage.reviews);
			if (reviews.length > 1) {
				console.log("готово");
				let reviewsNew = reviews.filter(element => element.id != id);
				localStorage.reviews = JSON.stringify(reviewsNew);
				render(reviewsNew);
			} else {
				localStorage.removeItem("reviews");
				const reviewsAllBlock = document.querySelector(".reviews__all");
				reviewsAllBlock.innerHTML = "";
			}
		});
	});
};

if (localStorage.getItem("reviews")) {
	render(JSON.parse(localStorage.reviews));
}

addContentForm();
sortReviews(document.querySelectorAll(".reviews-item"));
deleteReviews();
/* localStorage.clear();
 */
