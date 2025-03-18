import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Message from "./Message";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const myName = "Roman";
const surname = "Shestakov";
root.render(
	<React.StrictMode>
		<App name={myName} />
		<Message surname={surname} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
