const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

let users = [];

let uniqueId = 0;

function writeDataUsers(path, data) {
	try {
		fs.writeFile(path, data);
	} catch (error) {
		console.error(error);
	}
}

const usersTest = function (path) {
	try {
		const result = JSON.parse(fs.readFile(path, utf8));
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

app.get("/users", (req, res) => {
	res.send({ users });
});

app.get("/users/:id", (req, res) => {
	const userId = +req.params.id;
	const user = users.find(user => user.id === userId);
	user ? res.send({ user }) : res.send(`Пользователь id = ${userId} не найден`);
});

app.post("/users", (req, res) => {
	uniqueId += 1;
	console.log(req.body);
	users.push({
		id: uniqueId,
		...req.body,
	});
	res.send({ id: uniqueId });
});

app.put("/users/:id", (req, res) => {
	const userId = +req.params.id;
	const user = users.find(user => user.id === userId);
	if (user) {
		const { name, city } = req.body;
		user.name = name;
		user.city = city;
		res.send({ user });
	} else res.send(`Пользователь id = ${userId} не найден`);
});

app.delete("/users/:id", (req, res) => {
	const userId = +req.params.id;
	const user = users.find(user => user.id === userId);
	if (user) {
		users.splice(users.indexOf(user), 1);
		res.send(`Пользователь id = ${userId} удален`);
	} else res.send(`Пользователь id = ${userId} не найден`);
});

app.listen(3000, () => {
	console.log("Сервер запущен на порту 3000)");
});
