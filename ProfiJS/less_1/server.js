"use strict";
const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.use(express.static("static"));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const cook = ["Виктор", "Ольга", "Дмитрий"];

const dishes = {
	Pizza: ["Маргарита", "Пепперони"],
	Sushi: ["Филадельфия", "Калифорния"],
	Dessert: ["Тирамису ", "Чизкейк"],
};
const client = {};

app.get("/", (req, res) => {
	res.render("order", {
		layout: "main",
		title: "Заказ на кухню",
	});
});
app.get("/data", (req, res) => {
	const dishesStr = JSON.stringify(dishes, null, 4);
	res.send(dishesStr);
});

app.listen(3000, () => {
	console.log("Сервер запущен");
});
