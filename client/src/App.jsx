import { useState } from "react";
import "./App.css";

function App() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState(0);
	const [sex, setSex] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(0);

	const [employeeList, setEmployeeList] = useState([]);

	//* Get Request
	function getInformation() {
		Axios.get("http://localhost:5000/showemployees").then((response) => {
			setEmployeeList(response.data);
		});
	}

	//* Insert Employees
	const submitForm = () => {
		Axios.post("http://localhost:5000/insert", {
			firstName: firstName,
			lastName: lastName,
			age: age,
			sex: sex,
			phoneNumber: phoneNumber,
		});

		setEmployeeList([...employeeList], { lastName: lastName });
	};

	return (
		<div className="App">
			<h1>Human Resource Management System</h1>

			<div className="form">
				<label>
					First Name: {firstName}
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
					Last Name: {lastName}
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
					Age: {age}
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
					Sex: {sex}
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
					Phone Number: {phoneNumber}
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

				{employeeList.map((value) => {
					return <h2>LastName: {value.lastName}</h2>;
				})}
			</div>
		</div>
	);
}

export default App;
