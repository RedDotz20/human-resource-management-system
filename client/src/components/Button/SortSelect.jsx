import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export function SortBtn({ sortOptions, setSortOptions }) {
	const handleChange = (event) => {
		setSortOptions(event.target.value);
	};
	return (
		<>
			<FormControl sx={{ width: 1 / 4 }} spacing={2} size="small">
				<InputLabel id="sortInputBtn">Select Sort</InputLabel>
				<Select
					labelId="sortInputBtn"
					id="sortInputBtn"
					defaultValue={""}
					value={sortOptions}
					label="Select----Sort"
					onChange={handleChange}
				>
					<MenuItem value={"fnameASC"}>First Name (ASC) A-Z</MenuItem>
					<MenuItem value={"fnameDESC"}>First Name (DESC) Z-A</MenuItem>
					<MenuItem value={"lnameASC"}>Last Name (ASC) A-Z</MenuItem>
					<MenuItem value={"lnameDESC"}>Last Name (DESC) Z-A</MenuItem>
					<MenuItem value={"ageASC"}>Age (ASC) 1-99</MenuItem>
					<MenuItem value={"ageDESC"}>Age (DESC) 99-1</MenuItem>
				</Select>
			</FormControl>
		</>
	);
}
