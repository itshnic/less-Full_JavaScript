"use strict";
fetch("data.json")
	.then(response => response.json())
	.then(jsonData => console.log(jsonData));

const container = document.querySelector(".box__cards");
