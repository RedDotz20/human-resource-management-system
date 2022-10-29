import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function FreeSolo() {
	return (
		<Stack sx={{ width: 500 }}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				// options={top100Films.map((option) => option.title)}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Search input"
						InputProps={{
							...params.InputProps,
							type: "search",
						}}
					/>
				)}
			/>
		</Stack>
	);
}
