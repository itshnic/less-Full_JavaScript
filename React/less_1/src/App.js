import "./App.css";
import Message from "./components/Message.js";
import Test from "./components/Test_huk.js";

function App() {
	const myName = "Roman";
	const surname = "Shestakov";
	return (
		<div className="App">
			<header className="App-header">
				<span>Мое имя {myName}!</span>
				<Message surName={surname}></Message>
				<Test />
			</header>
		</div>
	);
}

export default App;
