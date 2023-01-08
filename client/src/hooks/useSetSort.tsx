import { useState, Dispatch, SetStateAction } from "react";

type setSortState = Dispatch<SetStateAction<string>>;

export const useSetSort = (setSortOptions: setSortState) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget);

	const handleClose = (event: any) => {
		const sortValue: string | null = event.target.getAttribute("value");
		sortValue !== null && setSortOptions(sortValue);
		setAnchorEl(null);
	};

	return {
		anchorEl,
		open,
		handleClick,
		handleClose,
	};
};

