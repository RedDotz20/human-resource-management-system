import React, { useState } from "react";
import Axios from "axios";
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

	return (
		<div className="App">
			<h1>Human Resource Management System</h1>

			<div className="form">
				<label>
					{/* First Name: {firstName} */}
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
					{/* Last Name: {lastName} */}
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
					{/* Age: {age} */}
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
					{/* Sex: {sex} */}
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
					{/* Phone Number: {phoneNumber} */}
					<input
						type="number"
						className="phone-number"
						placeholder="Phone Number"
						onChange={(event) => {
							setPhoneNumber(event.target.value);
						}}
						value={phoneNumber}
					/>
				</label>
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
