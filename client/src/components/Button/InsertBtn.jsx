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
		<>
			<Stack className="insert-btn" direction="row" spacing={2}>
				<Button
					className="openModalBtn"
					variant="contained"
					startIcon={<Add />}
					onClick={() => {
						setInsertModal(true);
					}}
				>
					Insert
				</Button>
			</Stack>
		</>
	);
}
