import React from "react";
import {
	Stack,
	Button,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from "@mui/material";
import Add from "@mui/icons-material/Add";

export function InsertBtn({ setInsertModal }) {
	return (
		<Button
			sx={{ width: 150, padding: 1 }}
			direction="row"
			className="insert-btn openModalBtn"
			variant="contained"
			startIcon={<Add />}
			onClick={() => {
				setInsertModal(true);
			}}
		>
			Insert
		</Button>
	);
}
