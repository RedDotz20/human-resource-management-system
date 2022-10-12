import React, { useState } from "react";
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

function App() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState(0);
	const [sex, setSex] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(0);

	const [employeeList, setEmployeeList] = useState([]);
	const PORT = 3000;

	//* Get Request
	function getInformation() {
		Axios.get(`http://localhost:${PORT}/showemployees`).then((response) => {
			setEmployeeList(response.data);
		});
	}

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
		color: "white",
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

				<TextField
					id="filled-basic"
					label="Last Name"
					variant="standard"
					size="small"
					InputLabelProps={{ style }}
				/>

				<TextField
					id="filled-basic"
					label="Age"
					variant="standard"
					type="number"
					size="small"
					InputLabelProps={{ style }}
				/>

				<FormControl>
					<FormLabel>Sex</FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
					>
						<FormControlLabel value="M" control={<Radio />} label="Male" />
						<FormControlLabel value="F" control={<Radio />} label="Female" />
					</RadioGroup>
				</FormControl>

				<TextField
					id="filled-basic"
					label="Phone Number"
					variant="standard"
					size="small"
					InputLabelProps={{ style }}
				/>

				{/* <label>
					<input
						type="text"
						className="first-name"
						placeholder="First Name"
						onChange={(event) => {
							setFirstName(event.target.value);
						}}
						value={firstName}
					/>
				</label>
				<label>
					<input
						type="text"
						className="last-name"
						placeholder="Last Name"
						onChange={(event) => {
							setLastName(event.target.value);
						}}
						value={lastName}
					/>
				</label>
				<label>
					<input
						type="number"
						className="age"
						placeholder="Age"
						onChange={(event) => {
							setAge(event.target.value);
						}}
						value={age}
					/>
				</label>
				<label>
					<input
						type="text"
						className="sex"
						placeholder="Sex"
						onChange={(event) => {
							setSex(event.target.value);
						}}
						value={sex}
					/>
				</label>
				<label>
					<input
						type="number"
						className="phone-number"
						placeholder="Phone Number"
						onChange={(event) => {
							setPhoneNumber(event.target.value);
						}}
						value={phoneNumber}
					/>
				</label> */}

				<button onClick={submitForm}>Insert Data</button>
				<button onClick={getInformation}>Read Data</button>
				<table>
					<thead>
						<tr>
							<td>id</td>
							<td>First Name</td>
							<td>LastName</td>
						</tr>
					</thead>
					<tbody>
						{employeeList.map((value) => {
							return console.log(value);
						})}

						{/* {employeeList.map((value) => {
							return <td>{value.firstName}</td>;
						})}

						{employeeList.map((value) => {
							return <td>{value.lastName}</td>;
						})} */}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
