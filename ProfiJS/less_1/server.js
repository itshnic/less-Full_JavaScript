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
	Dessert: ["Тирамису 1", "Чизкейк"],
};

const cookForDishes = new Map();

cookForDishes
	.set(cook.Dima, "Pizza")
	.set(cook.Olga, "Dessert")
	.set(cook.Victor, "Sushi");

let cookForDishesObj = Object.fromEntries(cookForDishes);

let ordersClient = {};

let ordersClientAndCook = function (cookForDishes, ordersClient) {
	for (let keyCook in cookForDishes) {
		for (let keyClient in ordersClient) {
			ordersClient[keyClient].forEach(el => {
				if (el.dishes == cookForDishes[keyCook]) el.cook = keyCook;
			});
		}
	}
};

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

app.post("/", (req, res) => {
	let data = req.body;

	for (let key in data) {
		ordersClient[key] = data[key];
	}
	ordersClientAndCook(cookForDishesObj, ordersClient);

	res.send(
		JSON.stringify(
			{
				cook: cookForDishesObj,
				client: ordersClient,
			},
			null,
			4
		)
	);
});

app.listen(3000, () => {
	console.log("Сервер запущен");
});
