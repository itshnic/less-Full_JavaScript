"use strict";
const getUserData = async function (url, id) {
	const response = await fetch(url);

	if (response.status == 200) {
		const data = await response.json();
		const uId = await data.some(el => {
			return el.id == id;
		});
		uId
			? console.log(`User ${id} найден`)
			: console.log(new Error("User not found"));
	} else console.log(`Error ${response.status}`);
};
getUserData("data.json", "0012");
