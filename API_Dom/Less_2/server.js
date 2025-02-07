"use strict";
const express = require("express");
const fs = require("fs");
const { engine } = require("express-handlebars");

const app = express();

app.use(express.static("static"));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const path = "./bd/commentsOnFoto.txt";

const writeFile = function (path, data) {
	try {
		fs.writeFileSync(path, JSON.stringify(data, null, 4));
	} catch (error) {
		console.log("Ошибка записи файла");
	}
};

const readFile = function (path) {
	return fs.readFileSync(path, "utf8", (err, data) => {
		if (err) console.log("Ошибка чтения файла");
		else data;
	});
};

let arrayData = JSON.parse(readFile(path));

app.get("/", (req, res) => {
	res.render("foto", {
		layout: "main",
		title: "Фотогалерея",
		arrayData,
	});
});

app.listen(3000, () => {
	console.log("Сервер запущен");
});
