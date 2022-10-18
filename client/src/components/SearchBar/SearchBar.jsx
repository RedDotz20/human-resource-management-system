import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
import {
	InputAdornment,
	FormControl,
	InputLabel,
	OutlinedInput,
	IconButton,
} from "@mui/material";

export default function SearchBar() {
	const [values, setValues] = useState({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className="searchbar">
			<FormControl
				sx={{ width: { sm: "100%" } }}
				variant="outlined"
				size="small"
			>
				<InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
				<OutlinedInput
					id="outlined-adornment-password"
					type="text"
					value={values.password}
					onChange={handleChange("password")}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					}
					label="Search"
				/>
			</FormControl>
		</div>
	);
}
