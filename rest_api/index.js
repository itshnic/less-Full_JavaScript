const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

const fileName = "data.txt";

let a = fs.open(fileName, "r", err => {
	if (err) throw err;
});

let dataUsers = readDataUsers(fileName);
console.log(dataUsers);

let users = Array.isArray(dataUsers) ? dataUsers : Array.from(dataUsers);

let uniqueId = 0;

function writeDataUsers(path, data) {
	try {
		fs.writeFileSync(path, JSON.stringify(data, null, 4));
	} catch (error) {
		console.log("Ошибка записи файла");
	}
}

function readDataUsers(path) {
	return fs.readFileSync(path, "utf8", (err, data) => {
		if (err) console.log("Ошибка чтения файла");
		else data;
	});
}

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
	writeDataUsers(fileName, users);
	res.send({ id: uniqueId });
});

app.put("/users/:id", (req, res) => {
	const userId = +req.params.id;
	const user = users.find(user => user.id === userId);
	if (user) {
		const { name, city } = req.body;
		user.name = name;
		user.city = city;
		writeDataUsers(fileName, users);
		res.send({ user });
	} else res.send(`Пользователь id = ${userId} не найден`);
});

app.delete("/users/:id", (req, res) => {
	const userId = +req.params.id;
	const user = users.find(user => user.id === userId);
	if (user) {
		users.splice(users.indexOf(user), 1);
		writeDataUsers(fileName, users);
		res.send(`Пользователь id = ${userId} удален`);
	} else res.send(`Пользователь id = ${userId} не найден`);
});

app.listen(3000, () => {
	console.log("Сервер запущен на порту 3000)");
});
