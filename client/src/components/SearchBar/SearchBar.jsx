import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

export default function SearchBar({ employeeList, setSearchQuery }) {
	const defaultProps = {
		options: employeeList.map((option) => ({
			id: option.id,
			firstName: option.firstName,
			lastName: option.lastName,
		})),
		getOptionLabel: (option) => `${option.firstName} ${option.lastName}`,
	};

	return (
		<Stack spacing={1} sx={{ width: 700 }}>
			<Autocomplete
				autoComplete
				includeInputInList
				{...defaultProps}
				id="auto-complete"
				onChange={(event, value) => {
					value === null ? setSearchQuery(null) : setSearchQuery(value.id);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Search"
						variant="outlined"
						size="small"
					/>
				)}
			/>
		</Stack>
	);
}
