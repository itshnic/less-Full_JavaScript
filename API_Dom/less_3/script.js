"use strict";
const url =
	"https://api.unsplash.com/photos/?client_id=pIePwdcizPXl7cPzexlv07APRmFfZrghd2_udjV9-EM";

const data = function (url) {
	return fetch(url)
		.then(response => response.json())
		.then(result => {
			renderHtml(result);
			clickForImg(document.querySelectorAll(".list__item"));
		})
		.catch(error => console.log(`Ошибка - ${error}`));
};

const renderHtml = array => {
	const body = document.querySelector("body");
	const list = document.createElement("ul");
	list.classList.add("list__photo");
	body.prepend(list);
	let item = null;
	let img = null;
	let countLike = null;

	array.forEach(linkForImg => {
		item = document.createElement("li");
		img = document.createElement("img");
		countLike = document.createElement("span");

		item.classList.add("list__item");
		item.setAttribute("id", linkForImg.id);
		img.src = linkForImg.urls.small;
		countLike.textContent = localStorage.getItem(linkForImg.id)
			? localStorage.getItem(linkForImg.id)
			: 0;

		list.prepend(item);
		item.prepend(img);
		item.prepend(countLike);
		/* localStorage.clear(); */
	});
};
const clickForImg = array => {
	array.forEach(el => {
		el.addEventListener("click", e => {
			const boxItem = e.target.offsetParent;
			const count = ++boxItem.querySelector("span").textContent;
			localStorage.setItem(boxItem.getAttribute("id"), count);
		});
	});
};

data(url);
