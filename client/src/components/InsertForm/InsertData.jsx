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

export default function InsertData({ setRefresh, setOpenModal }) {
	function SubmitData() {
		Axios.post(`${URL}/insert`, {
			firstName: firstName,
			lastName: lastName,
			age: age,
			sex: sex,
			phoneNumber: phoneNumber,
		});
	}

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState(0);
	const [sex, setSex] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(0);

	function handleChange(event) {
		const { name, value } = event.target;
		name == "firstName" && setFirstName(() => value);
		name == "lastName" && setLastName(() => value);
		name == "age" && setAge(() => value);
		name == "sex" && setSex(() => value);
		name == "phoneNumber" && setPhoneNumber(() => value);
	}

	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<CloseIcon
					className="titleCloseBtn"
					onClick={() => {
						setOpenModal(false);
						console.log("closed");
					}}
				/>

				<h1>Insert Employee</h1>
				<TextField
					label="First Name"
					variant="standard"
					size="small"
					name="firstName"
					onChange={handleChange}
				/>

				<TextField
					label="Last Name"
					name="lastName"
					variant="standard"
					size="small"
					onChange={handleChange}
				/>

				<TextField
					label="Age"
					variant="standard"
					name="age"
					type="number"
					size="small"
					onChange={handleChange}
				/>

				<FormControl>
					<FormLabel>Sex </FormLabel>
					<RadioGroup row name="sex" onChange={handleChange}>
						<FormControlLabel label="Male" value="M" control={<Radio />} />
						<FormControlLabel label="Female" value="F" control={<Radio />} />
					</RadioGroup>
				</FormControl>

				<TextField
					label="Phone Number"
					variant="standard"
					name="phoneNumber"
					size="small"
					onChange={handleChange}
				/>

				<Button
					className="insert-form"
					variant="contained"
					size="small"
					onClick={() => {
						SubmitData();
						setRefresh(!setRefresh);
					}}
				>
					Confirm
				</Button>
			</div>
		</div>
	);
}
