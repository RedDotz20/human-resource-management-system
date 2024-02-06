import { motion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';
import { zoomInOut } from './Variants';

interface ModalProps {
	handleClose: () => void;
	children: React.ReactNode;
	className?: string;
}

function ModalPortal({ children }: { children: React.ReactNode }) {
	const modalRoot = document.getElementById('modal-root') as HTMLElement;
	return ReactDOM.createPortal(children, modalRoot);
}

function Backdrop({ children, handleClose }: ModalProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={handleClose}
			style={{
				position: 'absolute',
				zIndex: 99,
				top: 0,
				backgroundColor: '#0000007f',
				left: 0,
				height: '100vh',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{children}
		</motion.div>
	);
}

export default function Modal({ children, handleClose, ...rest }: ModalProps) {
	return (
		<ModalPortal>
			<Backdrop handleClose={handleClose}>
				<motion.div
					onClick={(event: { stopPropagation: () => any }) =>
						event.stopPropagation()
					}
					variants={zoomInOut}
					initial="hidden"
					animate="visible"
					exit="exit"
					style={{
						position: 'relative',
						backgroundColor: '#fff',
						padding: '1.25rem',
						// margin: '0rem 2rem',
						borderRadius: '0.5rem',
						display: 'flex',
						flexDirection: 'column',
					}}
					{...rest}
				>
					{children}
				</motion.div>
			</Backdrop>
		</ModalPortal>
	);
}
