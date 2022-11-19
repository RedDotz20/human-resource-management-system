import React from "react";
import { TextField, Autocomplete, Stack } from "@mui/material/";

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
