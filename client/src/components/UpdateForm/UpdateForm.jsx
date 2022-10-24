import React, { useState } from "react";
import Axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import "./UpdateForm.css";
import {
	Button,
	TextField,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from "@mui/material";

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

function UpdateData({ refresh, setRefresh, setOpenModal }) {
	function UpdateRequest() {
		Axios.put(`${URL}/insert`, {
			firstName: values.firstName,
			lastName: values.lastName,
			age: values.age,
			sex: values.sex,
			phoneNumber: values.phoneNumber,
		});
	}

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

	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<CloseIcon
					className="titleCloseBtn"
					onClick={() => {
						setOpenModal(false);
					}}
				/>

				<h1 className="title">Insert Employee</h1>

				<TextField
					sx={{ my: 1 }}
					label="First Name"
					variant="outlined"
					size="small"
					name="firstName"
					onChange={handleChange("firstName")}
				/>

				<TextField
					sx={{ my: 1 }}
					label="Last Name"
					name="lastName"
					variant="outlined"
					size="small"
					onChange={handleChange("lastName")}
				/>

				<TextField
					sx={{ my: 1 }}
					label="Age"
					variant="outlined"
					name="age"
					type="number"
					size="small"
					onChange={handleChange("age")}
				/>

				<FormControl sx={{ my: 1 }}>
					<FormLabel>Sex</FormLabel>
					<RadioGroup row name="sex" onChange={handleChange("sex")}>
						<FormControlLabel label="Male" value="M" control={<Radio />} />
						<FormControlLabel label="Female" value="F" control={<Radio />} />
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
							setOpenModal(false);
						}}
					>
						Cancel
					</Button>
					<Button
						className="confirm-btn"
						variant="contained"
						size="small"
						onClick={() => {
							SubmitData();
							setOpenModal(false);
							setRefresh(() => !refresh);
						}}
					>
						Confirm
					</Button>
				</footer>
			</div>
		</div>
	);
}

export default InsertData;
