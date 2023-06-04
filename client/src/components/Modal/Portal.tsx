import React from 'react';
import ReactDOM from 'react-dom';

function Portal({ children }: { children: React.ReactNode }) {
	const modalRoot = document.getElementById('modal-root') as HTMLElement;
	return ReactDOM.createPortal(children, modalRoot);
}

export default Portal;
