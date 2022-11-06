import React, { useState } from "react";
import { InsertQuery } from "../../data/Data";
import CloseIcon from "@mui/icons-material/Close";
import "./InsertData.css";
import {
	Button,
	TextField,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from "@mui/material";

function InsertData({ refreshState, setInsertModal }) {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		age: 0,
		sex: "",
		phoneNumber: 0,
	});

	const handleChange = (props) => (event) => {
		setValues({ ...values, [props]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		InsertQuery(values);
		refreshState();
		setInsertModal(false);
	};

	// const error = values.firstName === "";

	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<CloseIcon
					className="titleCloseBtn"
					onClick={() => {
						setInsertModal(false);
					}}
				/>

				<h1 className="title">Insert Employee</h1>

				<form className="insertForm" onSubmit={handleSubmit}>
					<TextField
						autoFocus
						required
						// helperText={error ? "Input is Empty" : "Perfect!"}
						// error={error}
						sx={{ my: 1 }}
						label="First Name"
						variant="outlined"
						size="small"
						name="firstName"
						onChange={handleChange("firstName")}
					/>

					<TextField
						required
						sx={{ my: 1 }}
						label="Last Name"
						name="lastName"
						variant="outlined"
						size="small"
						onChange={handleChange("lastName")}
					/>

					<TextField
						required
						sx={{ my: 1 }}
						label="Age"
						variant="outlined"
						name="age"
						type="number"
						size="small"
						InputProps={{ inputProps: { min: 1, max: 99 } }}
						onChange={handleChange("age")}
					/>

					<FormControl sx={{ my: 1 }}>
						<FormLabel required>Sex</FormLabel>
						<RadioGroup row name="sex" onChange={handleChange("sex")}>
							<FormControlLabel
								required
								label="Male"
								value="M"
								control={<Radio required={true} />}
							/>
							<FormControlLabel
								required
								label="Female"
								value="F"
								control={<Radio required={true} />}
							/>
						</RadioGroup>
					</FormControl>

					<TextField
						sx={{ my: 1 }}
						label="Phone Number"
						variant="outlined"
						name="phoneNumber"
						size="small"
						onChange={handleChange("phoneNumber")}
					/>

					<footer>
						<Button
							className="cancel-btn"
							variant="contained"
							size="small"
							onClick={() => {
								setInsertModal(false);
							}}
						>
							Cancel
						</Button>
						<Button
							className="confirm-btn"
							variant="contained"
							size="small"
							color="success"
							type="submit"
						>
							Confirm
						</Button>
					</footer>
				</form>
			</div>
		</div>
	);
}

export default InsertData;
