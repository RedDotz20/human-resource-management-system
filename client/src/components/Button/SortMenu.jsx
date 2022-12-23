import SortIcon from "@mui/icons-material/Sort";
import { Button, Menu, MenuItem } from "@mui/material";
import { useSetSort } from "../../hooks/useSetSort";

export default function SortMenuBtn({ setSortOptions }) {
	const { anchorEl, open, handleClick, handleClose } =
		useSetSort(setSortOptions);

	return (
		<>
			<Button
				sx={{ width: 150, padding: 1 }}
				id="basic-button"
				startIcon={<SortIcon />}
				variant="contained"
				aria-controls={open ? "basic-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				Sort
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose} value="fnameASC">
					First Name (ASC) A-Z
				</MenuItem>
				<MenuItem onClick={handleClose} value="fnameDESC">
					First Name (DESC) Z-A
				</MenuItem>
				<MenuItem onClick={handleClose} value="lnameASC">
					Last Name (ASC) A-Z
				</MenuItem>
				<MenuItem onClick={handleClose} value="lnameDESC">
					Last Name (DESC) Z-A
				</MenuItem>
				<MenuItem onClick={handleClose} value="ageASC">
					Age (ASC) 1-99
				</MenuItem>
				<MenuItem onClick={handleClose} value="ageDESC">
					Age (DESC) 99-1
				</MenuItem>
			</Menu>
		</>
	);
}
