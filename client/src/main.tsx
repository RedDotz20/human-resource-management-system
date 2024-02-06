import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

let container: any = null;

document.addEventListener('DOMContentLoaded', () => {
	container = container || document.getElementById('root');
	ReactDOM.createRoot(container as HTMLElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
});
