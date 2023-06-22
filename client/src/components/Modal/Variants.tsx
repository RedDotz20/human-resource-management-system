export const zoomInOut = {
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
