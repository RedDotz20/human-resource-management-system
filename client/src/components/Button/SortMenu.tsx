import { Button, Menu, MenuItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useSetSort } from '../../hooks/useSetSort';
import SortIcon from '@mui/icons-material/Sort';
import muiTheme from '../../theme/theme';
import { sortOptionsInterface } from '../../interface/buttonInterface';

export default function SortMenuBtn({ setSortOptions }: sortOptionsInterface) {
	const { anchorEl, open, handleClick, handleClose } =
		useSetSort(setSortOptions);

	return (
		<ThemeProvider theme={muiTheme}>
			<Button
				sx={{ width: 150, padding: 1 }}
				id="sort-button"
				aria-label="sort-button"
				startIcon={<SortIcon />}
				variant="contained"
				color="primary"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
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
				<MenuItem
					onClick={handleClose}
					value="fnameASC"
				>
					First Name (ASC) A-Z
				</MenuItem>
				<MenuItem
					onClick={handleClose}
					value="fnameDESC"
				>
					First Name (DESC) Z-A
				</MenuItem>
				<MenuItem
					onClick={handleClose}
					value="lnameASC"
				>
					Last Name (ASC) A-Z
				</MenuItem>
				<MenuItem
					onClick={handleClose}
					value="lnameDESC"
				>
					Last Name (DESC) Z-A
				</MenuItem>
				<MenuItem
					onClick={handleClose}
					value="ageASC"
				>
					Age (ASC) 1-99
				</MenuItem>
				<MenuItem
					onClick={handleClose}
					value="ageDESC"
				>
					Age (DESC) 99-1
				</MenuItem>
			</Menu>
		</ThemeProvider>
	);
}
