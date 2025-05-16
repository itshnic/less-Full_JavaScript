import React, { useEffect, useState } from "react";

function CommentsList() {
	const [comments, setComments] = useState([
		{ id: 1, text: "Это первый комментарий" },
		{ id: 2, text: "Это второй комментарий" },
		{ id: 3, text: "Это третий комментарий" },
	]);

	let delComment = id => {
		setComments(comments.filter(item => item.id != id));
	};

	let arrList = [];

	useEffect(() => {
		arrList = comments.map(item => {
			<li className="list__item">
				<p id={item.id} className="text">
					{item.text}
				</p>
				<button className="dell" onClick={delComment(item.id)}>
					Удалить
				</button>
			</li>;
		});
	}, [comments]);

	return <ul>Привет</ul>;
}

export default CommentsList;
