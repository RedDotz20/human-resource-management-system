import { useState } from "react";

export function useSetSort(setSortOptions) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (e) => setAnchorEl(e.currentTarget);

	const handleClose = (event) => {
		const sortValue = event.target.getAttribute("value");
		sortValue !== null ? setSortOptions(sortValue) : null;
		setAnchorEl(null);
	};

	return {
		anchorEl,
		open,
		handleClick,
		handleClose,
	};
}
