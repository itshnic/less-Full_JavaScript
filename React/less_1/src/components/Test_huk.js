import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState();

	const up = () => {
		setCount("Привет");
	};

	return (
		<div>
			<span className="counter"> {count} </span>
			<button className="counter-button" onClick={up}>
				Click
			</button>
		</div>
	);
}
export default Counter;
