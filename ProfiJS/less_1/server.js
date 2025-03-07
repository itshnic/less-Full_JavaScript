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

let obj = Object.fromEntries(cookForDishes);

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

app.post("/post", (req, res) => {
	const body = req.body;
	for (let [key, value] of body) {
		console.log(`${key} - ${value}`);
	}
	res.send(JSON.stringify(obj, null, 4));
});

app.listen(3000, () => {
	console.log("Сервер запущен");
});
