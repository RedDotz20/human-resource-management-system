import React, { useState } from "react";
import Axios from "axios";
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

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

export default function InsertData({ refresh, setRefresh, setOpenModal }) {
	function SubmitData() {
		Axios.post(`${URL}/insert`, {
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

				<h1>Insert Employee</h1>
				<div className="insertForm"></div>
				<TextField
					label="First Name"
					variant="standard"
					size="small"
					name="firstName"
					onChange={handleChange("firstName")}
				/>

				<TextField
					label="Last Name"
					name="lastName"
					variant="standard"
					size="small"
					onChange={handleChange("lastName")}
				/>

				<TextField
					label="Age"
					variant="standard"
					name="age"
					type="number"
					size="small"
					onChange={handleChange("age")}
				/>

				<FormControl>
					<FormLabel>Sex</FormLabel>
					<RadioGroup row name="sex" onChange={handleChange("sex")}>
						<FormControlLabel label="Male" value="M" control={<Radio />} />
						<FormControlLabel label="Female" value="F" control={<Radio />} />
					</RadioGroup>
				</FormControl>

				<TextField
					label="Phone Number"
					variant="standard"
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
							setRefresh(!refresh);
						}}
					>
						Confirm
					</Button>
				</footer>
			</div>
		</div>
	);
}
