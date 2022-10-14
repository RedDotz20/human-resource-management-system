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
import "./components/getReq.css";
// import GetReq from "./components/GetReq";

function App() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState(0);
	const [sex, setSex] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(0);

	const [employeeList, setEmployeeList] = useState([]);
	const PORT = 3000;

	const [deleteData, setDeleteData] = useState(false);

	//* Get Request

	function getDataFromServer() {
		Axios.get(`http://localhost:${PORT}/showemployees`).then((res) => {
			setEmployeeList(() => res.data);
		});
	}

	// employeeList

	useEffect(getDataFromServer, [deleteData]);
	// console.log(employeeList);

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

	function deleteEmployeeFromState(fNameValue) {
		employeeList.filter((employee) => {
			if (employee.firstName != fNameValue) {
				return employee;
			}
		});
	}

	function deleteEmployeeFromServer(fNameValue) {
		Axios.delete(`http://localhost:${PORT}/delete/${fNameValue}`);
		deleteEmployeeFromState();
	}

	const style = {
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		overflow: "hidden",
		// color: "white",
	};

	const employeeListComponents = employeeList.map((value) => {
		return (
			<tr key={value.id}>
				<td>{value.id}</td>
				<td>{value.firstName}</td>
				<td>{value.lastName}</td>
				<td className="td-center">{value.age}</td>
				<td className="td-center">{value.sex}</td>
				<td className="td-center">{value.phoneNumber}</td>
				<td>
					<button>Edit</button>
				</td>
				<td>
					<button
						onClick={() => {
							deleteEmployeeFromServer(value.firstName);
							setDeleteData(!deleteData);
						}}
					>
						Delete
					</button>
				</td>
			</tr>
		);
	});

	function handleChange(event) {
		// console.log(event);
		// console.log(name, value);
		const { name, value } = event.target;
		name == "firstName" && setFirstName(() => value);
		name == "lastName" && setLastName(() => value);
		name == "age" && setAge(() => value);
		name == "sex" && setSex(() => value);
		name == "phoneNum" && setPhoneNumber(() => value);
	}

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
					name="firstName"
					InputLabelProps={{ style }}
					onChange={() => handleChange(event)}
				/>

				<h4>{lastName}</h4>
				<TextField
					id="filled-basic"
					label="Last Name"
					name="lastName"
					variant="standard"
					size="small"
					InputLabelProps={{ style }}
					onChange={() => handleChange(event)}
				/>

				<h4>{age}</h4>
				<TextField
					id="filled-basic"
					label="Age"
					variant="standard"
					name="age"
					type="number"
					size="small"
					InputLabelProps={{ style }}
					onChange={() => handleChange(event)}
				/>

				<h4>{sex}</h4>
				<FormControl>
					<FormLabel>Sex </FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="sex"
						onChange={() => handleChange(event)}
					>
						<FormControlLabel value="M" control={<Radio />} label="Male" />
						<FormControlLabel value="F" control={<Radio />} label="Female" />
					</RadioGroup>
				</FormControl>

				<h4>{phoneNumber}</h4>
				<TextField
					id="filled-basic"
					label="Phone Number"
					variant="standard"
					name="phoneNum"
					size="small"
					InputLabelProps={{ style }}
					onChange={() => handleChange(event)}
				/>

				<button onClick={submitForm}>Insert Data</button>
				{/* <button onClick={getInformation}>Read Data</button> */}
				{/* <GetReq /> */}

				<table className="content-table">
					<thead>
						<tr>
							<td>id</td>
							<td>FIRST NAME</td>
							<td>LAST NAME</td>
							<td>AGE</td>
							<td>SEX</td>
							<td>PHONE NUMBER</td>
							<td></td>
							<td></td>
						</tr>
					</thead>
					<tbody>{employeeListComponents}</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
