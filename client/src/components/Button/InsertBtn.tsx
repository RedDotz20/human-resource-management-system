import { ThemeProvider } from '@mui/material/styles';
import { useModal } from '../Modal/Modal';
import { Button } from '@mui/material';
import Add from '@mui/icons-material/Add';
import muiTheme from '../../theme/theme';

export function InsertBtn() {
	const { setInsert } = useModal((state) => ({
		setInsert: state.setInsert,
	}));

	return (
		<ThemeProvider theme={muiTheme}>
			<Button
				onClick={() => setInsert()}
				sx={{ width: 150, padding: 1 }}
				color="primary"
				className="insert-btn openModalBtn"
				aria-label="insert-btn"
				variant="contained"
				startIcon={<Add />}
			>
				Insert
			</Button>
		</ThemeProvider>
	);
}
