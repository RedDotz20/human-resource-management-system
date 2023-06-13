import { motion } from 'framer-motion';
interface ModalProps {
	handleClose: () => void;
	children: React.ReactNode;
	className?: string;
}

const zoomInOut = {
	hidden: {
		scale: 0.4,
		opacity: 0,
	},
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		scale: 0.8,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
};

export default function Modal({ children, ...rest }: ModalProps) {
	return (
		<motion.div
			onClick={(e) => e.stopPropagation()}
			variants={zoomInOut}
			initial="hidden"
			animate="visible"
			exit="exit"
			style={{
				position: 'relative',
				backgroundColor: '#fff',
				padding: '2rem',
				margin: '0rem 2rem',
				borderRadius: '0.5rem',
				display: 'flex',
				flexDirection: 'column',
			}}
			{...rest}
		>
			{children}
		</motion.div>
	);
}
