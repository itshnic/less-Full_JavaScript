"use strict";

fetch(
	"https://api.unsplash.com/photos/?client_id=pIePwdcizPXl7cPzexlv07APRmFfZrghd2_udjV9-EM"
)
	.then(response => response.json())
	.then(result => console.log(result));

const getData = async () => {
	const data = await fetch(
		"https://api.unsplash.com/photos/?client_id=pIePwdcizPXl7cPzexlv07APRmFfZrghd2_udjV9-EM"
	);

	if (data.ok) {
		return data.json();
	} else {
		throw new Error(
			`Данные не были получены, ошибка ${data.status} ${data.statusText}`
		);
	}
};
const render = getData();
console.log(render);
