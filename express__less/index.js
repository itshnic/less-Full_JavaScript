"use strict";
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "dataCount.json");

function writeFileData(pathToFile, objCount) {
	fs.writeFileSync(pathToFile, JSON.stringify(objCount, null, 2), err => {
		if (err) console.error(err);
	});
}

app.get("/", (req, res) => {
	const content = JSON.parse(fs.readFileSync(pathToFile, "utf-8"));
	console.log(content);
	content.countOpenPageHome++;
	writeFileData(pathToFile, content);
	res.send(`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="static/style.css" />
		<title>Home</title>
		<style>
			body {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 20px;
			}
			.title__home {
				color: aquamarine;
			}
			.title__about {
				color: blueviolet;
			}
		</style>
	</head>
	<body>
		<h1 class="title__home">Привет мир!</h1>
		<span class="countOpen__home">${content.countOpenPageHome}</span>
		<a href="about.html">About page!</a>
	</body>
</html>`);
});

app.get("/about.html", (req, res) => {
	const content = JSON.parse(fs.readFileSync(pathToFile, "utf-8"));
	console.log(content);
	content.countOpenPageAbout++;
	writeFileData(pathToFile, content);
	res.send(
		`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="href="static/style.css" />
		<title>About</title>
			<style>
			body {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 20px;
			}
			.title__home {
				color: aquamarine;
			}
			.title__about {
				color: blueviolet;
			}
		</style>
	</head>
	<body>
		<h1 class="title__about">Привет, меня зовут Роман)</h1>
		<span class="countOpen__about">${content.countOpenPageAbout}</span>
		<a href="/">Home page!</a>
	</body>
</html>`
	);
});
app.listen(3000);
