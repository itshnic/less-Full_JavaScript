"use strict";
const express = require("express");
const fs = require("fs");
const { engine } = require("express-handlebars");

const app = express();

app.use(express.static("static"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

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

let arrayData = JSON.parse(readFile(path));

app.get("/", (req, res) => {
	res.render("lessons", {
		layout: "main",
		title: "Запись на уроки!",
		arrayData,
	});
});

app.get("/", (req, res) => {
	res.sendFile("./style.css");
});

app.post("/users", (req, res) => {
	console.log(req.body);
});

app.listen(3000, () => {
	console.log("Сервер запущен на порту 3000)");
});
