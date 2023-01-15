import { useState, Dispatch, SetStateAction } from "react";

type setSortState = Dispatch<SetStateAction<string>>;

export function useSetSort(setSortOptions: setSortState) {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget);

	const handleClose = (event: React.MouseEvent<HTMLElement>) => {
		const sortValue: string | null = event.currentTarget.getAttribute("value");
		sortValue !== null && setSortOptions(sortValue);
		setAnchorEl(null);
	};

	return {
		anchorEl,
		open,
		handleClick,
		handleClose,
	};
}
