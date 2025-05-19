import React, { useEffect, useState } from "react";

function CommentsList() {
	const [comments, setComments] = useState([
		{ id: 1, text: "Это первый комментарий" },
		{ id: 2, text: "Это второй комментарий" },
		{ id: 3, text: "Это третий комментарий" },
	]);
	const [inputTxt, setInputTxt] = useState("");

	let addComment = () => {
		if (inputTxt) {
			let idLastItem = comments.length ? comments[comments.length - 1].id : 0;
			setComments([...comments, { id: idLastItem + 1, text: inputTxt }]);
			setInputTxt("");
		}
	};
	let click = event => {
		let id = event.target.id;
		setComments(comments.filter(item => item.id != id));
	};

	useEffect(() => {
		console.log("список комментариев:");
		comments.forEach(el => {
			console.log(el.id + " " + el.text);
		});
	}, [comments]);

	return (
		<>
			<ul>
				{comments.map(item => (
					<li className="list__item">
						<p id={item.id} className="text">
							{item.text}
						</p>
						<button id={item.id} className="dell" onClick={click}>
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
		</>
	);
}

export default CommentsList;
