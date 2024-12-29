"use strict";
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const data = {
	countOpenPageHome: 1,
	countOpenPageAbout: 1,
};

const pathToFile = path.join(__dirname, "data.json");

fs.writeFileSync(pathToFile, JSON.stringify(data, null, 4), err => {
	if (err) console.log(err);
	else console.log("фаил записан");
});

app.use(express.static("static"));
app.get("/", (res, req, next) => {
	/* 	const fileData = JSON.parse(
		fs.readFileSync(pathToFile, "utf-8", (err, data) => {
			if (err) console.log(err);
			else return data;
		})
	); */
	res.send(`<span>2</span>`);
	/* 	fs.writeFileSync(pathToFile, JSON.stringify(fileData, null, 4));
	next(); */
});
app.get("/about", (res, req) => {
	/* 	const fileData = JSON.parse(
		fs.readFileSync(pathToFile, "utf-8", (err, data) => {
			if (err) console.log(err);
			else return data;
		})
	); */
	res.send(`<span>1</span>`);
	/* fs.writeFileSync(pathToFile, JSON.stringify(fileData, null, 4)); */
});
app.listen(3000);
