import "./App.css";

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<span>Мое имя {props.name}!</span>
			</header>
		</div>
	);
}

export default App;
