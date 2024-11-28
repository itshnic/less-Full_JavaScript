"use strict";
/* task - 1 */
const getUserData = (id, url) => {
	fetch(url)
		.then(response => {
			console.log(response);
			const arr = response.json();
			console.log(arr);
			return arr;
		})
		.then(arrUsers => {
			let userId = arrUsers.filter(user => {
				if (user.id == id) return user;
			})[0];
			console.log(userId);

			if (userId) {
				console.log(`prise: ${userId.price}`);
			} else {
				throw new Error(`Нет такого ${id}`);
			}
		})
		.catch(error => console.error(error));
};

getUserData("0012", "data.json");

/* task - 2 */
const saveUserData = (urlServer, urlUser) => {
	const headPost = {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify(urlUser),
	};

	fetch(urlServer, headPost)
		.then(response => {
			if (response.ok) console.log("User data saved successfully");
			else throw new Error("Failed to save user data");
		})
		.catch(error => console.error(error));
};

/* task - 3 */

const changeStyleDelayed = id => {
	const el = document.querySelector(`#${id}`);
	el.style.color = "black";
};
setTimeout(changeStyleDelayed, 1000, 112);
