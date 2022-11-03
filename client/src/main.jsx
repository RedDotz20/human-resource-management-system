import React from "react";
import ReactDOM from "react-dom/client";
import Background from "./components/BackgroundImage/Background";
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Background />
		<App />
	</React.StrictMode>
);
