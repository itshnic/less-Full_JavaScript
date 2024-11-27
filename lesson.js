"use strict";
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

getUserData("0015", "data.json");
