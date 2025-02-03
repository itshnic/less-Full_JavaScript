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

const path = "./data.txt";

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
	res.render("lessons", {
		layout: "main",
		title: "Запись на уроки!",
		arrayData,
	});
});

app.get("/", (req, res) => {
	res.sendFile("./style.css");
});

/* app.get("/user/:id&:count", (req, res) => {
	console.log(`${req.params.id} и ${req.params.count}`);
	arrayData.forEach(el => {
		if (+req.params.id == el.id)
			el.registrationCountPeoples = +req.params.count;
		writeFile(path, arrayData);
	});
}); */

app.post("/user/", (req, res) => {
	console.log(`${req.body.id} и ${req.body.count}`);
	arrayData.forEach(el => {
		if (+req.body.id == el.id) el.registrationCountPeoples = +req.body.count;
		writeFile(path, arrayData);
	});
});

app.listen(3000, () => {
	console.log("Сервер запущен на порту 3000)");
});
