import "./App.css";

function Message(props) {
	return (
		<div className="Message">
			<header className="Message-header">
				<span>Моя фамилия {props.surname}!</span>
			</header>
		</div>
	);
}

export default Message;
