const express = require("express");
const fs = require("fs");
const Joi = require("joi");

const app = express();

app.use(express.json());

const fileName = "data.txt";

const schemeValidData = Joi.object({
	name: Joi.string().min(3).required(),
	city: Joi.string().min(3).required(),
});
const schemeValidId = Joi.object({
	id: Joi.number().min(1).required(),
});

if (!fs.existsSync(fileName)) {
	writeDataUsers(fileName, []);
}

let users = JSON.parse(readDataUsers(fileName));

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
	const validId = schemeValidId.validate(req.params);
	if (validId.error) {
		console.log(`В url не корректные данные ${validId.error.details}`);
		return res
			.status(400)
			.send(
				`В url не корректные данные ${JSON.stringify(
					validId.error.details[0].context,
					null,
					4
				)}`
			);
	}

	const userId = +req.params.id;
	const user = users.find(user => user.id === userId);
	user ? res.send({ user }) : res.send(`Пользователь id = ${userId} не найден`);
});

app.post("/users", (req, res) => {
	const validData = schemeValidData.validate(req.body);
	if (validData.error) {
		console.log(validData.error.details);
		return res
			.status(400)
			.send(
				`Введены не корректные данные ${JSON.stringify(
					validData.error.details[0].context,
					null,
					4
				)}`
			);
	}

	let uniqueId = 1;
	if (users.length > 0) {
		uniqueId = users[users.length - 1].id + 1;
	}
	users.push({
		id: uniqueId,
		...req.body,
	});
	writeDataUsers(fileName, users);
	res.send({ id: uniqueId });
});

app.put("/users/:id", (req, res) => {
	const validId = schemeValidId.validate(req.params);
	if (validId.error) {
		console.log(
			`В url не корректные данные ${JSON.stringify(
				validId.error.details[0].context,
				null,
				4
			)}`
		);
		return res
			.status(400)
			.send(
				`В url не корректные данные ${JSON.stringify(
					validId.error.details[0].context,
					null,
					4
				)}`
			);
	}

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
	const validId = schemeValidId.validate(req.params);
	if (validId.error) {
		console.log(
			`В url не корректные данные ${JSON.stringify(
				validId.error.details[0].context,
				null,
				4
			)}`
		);
		return res
			.status(400)
			.send(
				`В url не корректные данные ${JSON.stringify(
					validId.error.details[0].context,
					null,
					4
				)}`
			);
	}

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
