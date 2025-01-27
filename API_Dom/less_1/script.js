"use strict";
const express = require("express");
const fs = require("fs");

const app = express();

let arrayData = [];

const path = "./data.txt";

function writeFile(path, data) {
	try {
		fs.writeFileSync(path, JSON.stringify(data, null, 4));
	} catch (error) {
		console.log("Ошибка записи файла");
	}
}

function readFile(path) {
	return fs.readFileSync(path, "utf8", (err, data) => {
		if (err) console.log("Ошибка чтения файла");
		else data;
	});
}

/* function renderHtml(arrayData, classNameParent) {
	if (arrayData) {
		arrayData.forEach(el => {
			const lessonsItem = document.createElement("li");
			lessonsItem.classList.add = "lessons__item";
			lessonsItem.textContent = `
		`;
			parentBlock.appendChild(lessonsItem);
		});
	} else console.log("Массив пуст!");
} */

app.get("/", (req, res) => {
	arrayData = readFile(path);
	res.sendFile("static/index.html");
});

app.get("/", (req, res) => {
	console.log(arrayData);
	res.send(renderHtml(arrayData, "lessons"));
});
app.listen(3000, () => {
	console.log("Сервер запущен на порту 3000)");
});
