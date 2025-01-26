"use strict";
const express = require("express");
const fs = require("fs");

const app = express();

let arrayData = [];

const path = "./data.txt";

function writeFile(path, data) {
	try {
		fs.writeFileSync(path, JSON.stringify(data, null, 4));
	} catch (error) {
		console.log("Ошибка записи файла");
	}
}

function readFile(path) {
	return fs.readFileSync(path, "utf8", (err, data) => {
		if (err) console.log("Ошибка чтения файла");
		else data;
	});
}

arrayData = readFile(path);
console.log(arrayData);

const lessonsBlock = document.querySelector(".lessons");

if (arrayData) {
	arrayData.forEach(el => {
		const lessonsItem = document.createElement("li");
		lessonsItem.classList.add = "lessons__item";
		lessonsItem.textContent = `<p class="lessons__item-name">${el.name}</p>
					<p class="lessons__item-date">
						Дата начала занятия: <span>${el.date}</span>
					</p>
					<p class="lessons__item-time">
						Время начала занятия: <span>${el.time}</span>
					</p>
					<p class="countPeople_max">
						Максимальное количество учеников: <span>${el.maxCountPeoples}</span>
					</p>
					<p class="countPeople_registered">
						Зарегистрировалось учеников: <span class="_red">${el.registrationCountPeoples}</span>
					</p>
					<p class="lessons__item-textInfo _red">Мест нет!</p>
					<button class="lessons__item-btn">Запись на занятие</button>
		`;
		lessonsBlock.appendChild(lessonsItem);
	});
}
