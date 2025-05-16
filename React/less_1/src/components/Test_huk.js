import React, { useEffect, useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	const [bool, setbool] = useState("true");
	useEffect(() => {
		console.log("Изменено");
	}, [bool]);
	const checkBool = () => setbool("true" ? "false" : "true");
	const up = () => setCount(count + 1);

	return (
		<div>
			<span className="counter">{count}</span>
			<button className="counter-button" onClick={up}>
				Click
			</button>
			<button className="counter-button" onClick={checkBool}>
				Check
			</button>
			<span className="check">Написана {bool}</span>
		</div>
	);
}
export default Counter;
