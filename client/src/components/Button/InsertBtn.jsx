import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../theme/theme";
import { Button } from "@mui/material";
import Add from "@mui/icons-material/Add";

export function InsertBtn({ setInsertModal }) {
	return (
		<ThemeProvider theme={muiTheme}>
			<Button
				sx={{ width: 150, padding: 1 }}
				color="primary"
				direction="row"
				className="insert-btn openModalBtn"
				aria-label="insert-btn"
				variant="contained"
				startIcon={<Add />}
				onClick={() => {
					setInsertModal(true);
				}}
			>
				Insert
			</Button>
		</ThemeProvider>
	);
}
