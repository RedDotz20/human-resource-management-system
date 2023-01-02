import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

let container = null;
document.addEventListener("DOMContentLoaded", () => {
	if (!container) {
		container = document.getElementById("root");
		ReactDOM.createRoot(container).render(
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
	}
});
