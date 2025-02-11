"use strict";
const url =
	"https://api.unsplash.com/photos/?client_id=pIePwdcizPXl7cPzexlv07APRmFfZrghd2_udjV9-EM";
let ArrayData = [];

/* fetch(
	"https://api.unsplash.com/photos/?client_id=pIePwdcizPXl7cPzexlv07APRmFfZrghd2_udjV9-EM"
)
	.then(response => response.json())
	.then(result => {
		result.forEach(element => {
			ArrayData.push(element);
		});
	}); */

/* const data = function (url) {
	return fetch(
		"https://api.unsplash.com/photos/?client_id=pIePwdcizPXl7cPzexlv07APRmFfZrghd2_udjV9-EM"
	).then(response => response.json());
};

console.log(data(url).then(response => response)); */
const app = async () => {
	const obj = await fetch(url);
	const result = await obj.json();
};

app();
