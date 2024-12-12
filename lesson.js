"use strict";
<<<<<<< HEAD
=======
const http = require("http");

const serverHTTP = port => {
	let countOpenMain = 0;
	let countOpenAbout = 0;

	const server = http.createServer((req, res) => {
		if (!countOpenMain) console.log("Server запущен");

		if (req.url == "/") {
			res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
			countOpenMain++;
			res.end(
				`<a href="/about">Переход на Страницу обо мне</a>
			<p>Главная страница открыта - ${countOpenMain} раз!!!</p>`
			);
		} else if (req.url == "/about") {
			res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
			countOpenAbout++;
			res.end(`<a href="/">Переход на Главную страницу</a>
			<p>Страница "Обо мне" открыта - ${countOpenAbout} раз!!!</p>`);
		} else {
			res.writeHead(404, { "Content-Type": "text/html;charset=UTF-8" });
			res.end(`<a href="/">Ошибка 404</a>`);
		}
	});
	server.listen(port);
	console.log("Запрос отправлен");
};
serverHTTP(3000);
>>>>>>> 228ced3cc42600e68cce4d45dc0c7ac04e2f4760
