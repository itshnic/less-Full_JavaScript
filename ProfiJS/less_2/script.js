"use strict";
class Library {
	#books = ["Толстой"];

	constructor(...arrBooks) {
		arrBooks.forEach(el => {
			if (this.hasBook(el)) throw new Error(`Книга ${el} есть в библиотеке!`);
		});
		this.#books = arrBooks;
	}

	set addBooks(item) {
		if (this.hasBook(item)) throw new Error(`Книга ${item} есть в библиотеке!`);
		this.#books.push(item);
	}
	get allBooks() {
		return this.#books;
	}
	removeBook(item) {
		this.#books = this.#books.filter(el => el != item);
	}
	hasBook(item) {
		/* let bool = false;
		this.#books.forEach(el => {s
			if (el == item) bool = true;
		});
		return bool; */
		return this.#books.some(el => el == item);
	}
}

const arrBook = new Library("Чехов", "Толстой");
arrBook.addBooks = "Пушкин";
arrBook.addBooks = "Маяковский";
arrBook.addBooks = "GB";

console.log(arrBook.allBooks);

console.log(arrBook.hasBook("Пушкин"));
arrBook.removeBook("GB");
console.log(arrBook.allBooks);

arrBook.addBooks = "Маяковский";
