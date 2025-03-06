"use strict";
const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.use(express.static("static"));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const cook = {
	Victor: "Виктор",
	Olga: "Ольга",
	Dima: "Дмитрий",
};

const dishes = {
	Pizza: ["Маргарита", "Пепперони"],
	Sushi: ["Филадельфия", "Калифорния"],
	Dessert: ["Тирамису ", "Чизкейк"],
};

const cookForDishes = new Map();

cookForDishes
	.set(cook.Dima, "Pizza")
	.set(cook.Olga, "Dessert")
	.set(cook.Victor, "Sushi");

console.log(cookForDishes);

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

app.get("/form", (req, res) => {
	const body = res.body;
});

app.listen(3000, () => {
	console.log("Сервер запущен");
});
