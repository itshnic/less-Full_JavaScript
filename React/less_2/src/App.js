import "./App.css";
import React, { useEffect, useState } from "react";
/* import "./components/CommentsList"; */

function App() {
	const [comments, setComments] = useState([
		{ id: 1, text: "Это первый комментарий" },
		{ id: 2, text: "Это второй комментарий" },
		{ id: 3, text: "Это третий комментарий" },
	]);
	const [inputTxt, setInputTxt] = useState("");

	let addComment = () => {
		if (inputTxt) {
			let arrLength = comments.length;
			let idLastItem = comments[arrLength - 1].id;
			setComments([...comments, { id: idLastItem + 1, text: inputTxt }]);
			console.log(comments);
			setInputTxt("");
		}
	};

	return (
		<div className="App">
			<ul>
				{comments.map(item => (
					<li className="list__item">
						<p id={item.id} className="text">
							{item.text}
						</p>
						<button
							id={item.id}
							className="dell"
							onClick={event => {
								let id = event.target.id;
								setComments(comments.filter(item => item.id != id));
								console.log(comments);
							}}
						>
							Удалить
						</button>
					</li>
				))}
			</ul>
			<div>
				<input
					onChange={event => {
						setInputTxt(event.target.value);
					}}
					type="text"
					value={inputTxt}
				/>
				<button className="add__btn" onClick={addComment}>
					Добавить
				</button>
			</div>
		</div>
	);
}

export default App;
