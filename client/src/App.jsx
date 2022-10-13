import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
	TextField,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from "@mui/material";

import "./App.css";
import GetReq from "./components/GetReq";

function App() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState(0);
	const [sex, setSex] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(0);

	const PORT = 3000;

	//* Get Request
	useEffect(() => {
		Axios.get(`http://localhost:${PORT}/showemployees`).then((res) => {
			setEmployeeList(res.data);
		});
	}, []);

	//* Insert Employees
	function submitForm() {
		Axios.post(`http://localhost:${PORT}/insert`, {
			firstName: firstName,
			lastName: lastName,
			age: age,
			sex: sex,
			phoneNumber: phoneNumber,
		});

		// setEmployeeList([...employeeList], { lastName: lastName });
	}

	const style = {
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		overflow: "hidden",
		// color: "white",
	};

	return (
		<div className="App">
			<h2>Human Resource Management System</h2>

			<div className="form">
				<h4>{firstName}</h4>
				<TextField
					id="filled-basic"
					label="First Name"
					variant="standard"
					size="small"
					InputLabelProps={{ style }}
					onChange={(event) => {
						setFirstName(event.target.value);
					}}
				/>

				<h4>{lastName}</h4>
				<TextField
					id="filled-basic"
					label="Last Name"
					variant="standard"
					size="small"
					InputLabelProps={{ style }}
					onChange={(event) => {
						setLastName(event.target.value);
					}}
				/>

				<h4>{age}</h4>
				<TextField
					id="filled-basic"
					label="Age"
					variant="standard"
					type="number"
					size="small"
					InputLabelProps={{ style }}
					onChange={(event) => {
						setAge(event.target.value);
					}}
				/>

				<h4>{sex}</h4>
				<FormControl>
					<FormLabel>Sex </FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
						onChange={(event) => {
							setSex(event.target.value);
						}}
					>
						<FormControlLabel value="M" control={<Radio />} label="Male" />
						<FormControlLabel value="F" control={<Radio />} label="Female" />
					</RadioGroup>
				</FormControl>

				<h4>{phoneNumber}</h4>
				<TextField
					id="filled-basic"
					label="Phone Number"
					r
					variant="standard"
					size="small"
					InputLabelProps={{ style }}
					onChange={(event) => {
						setPhoneNumber(event.target.value);
					}}
				/>

				<button onClick={submitForm}>Insert Data</button>
				{/* <button onClick={getInformation}>Read Data</button> */}

				<GetReq />
			</div>
		</div>
	);
}

export default App;
