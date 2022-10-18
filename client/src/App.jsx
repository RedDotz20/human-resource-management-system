import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import "./components/getReq.css";
import {
	Stack,
	Button,
	TextField,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import Modal from "./components/Modal/Modal";
import SearchBar from "./components/SearchBar/SearchBar";
import InsertData from "./components/InsertForm/InsertData";

export default function App() {
	//* Refresh Table onChange event
	const [refresh, setRefresh] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState(0);
	const [sex, setSex] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(0);

	const [employeeList, setEmployeeList] = useState([]);
	const PORT = 3000;
	const URL = `http://localhost:${PORT}`;

	//* Load All Data (page refresh)
	useEffect(getDataFromServer, [refresh]);

	//* Get Request
	function getDataFromServer() {
		Axios.get(`${URL}/showemployees`).then((res) => {
			setEmployeeList(() => res.data);
		});
	}

	//* Insert Employees
	function submitForm() {
		Axios.post(`${URL}/insert`, {
			firstName: firstName,
			lastName: lastName,
			age: age,
			sex: sex,
			phoneNumber: phoneNumber,
		});
	}

	//* Delete Employee from Database
	function deleteEmployeeFromServer(idValue) {
		Axios.delete(`${URL}/delete/${idValue}`);
	}

	//TODO--- Update Employee from Database ---
	function UppdateEmployeeFromServer(idValue) {
		Axios.put(`${URL}/update/:id`, {});
	}
	//TODO--- Update Employee from Database ---

	function handleChange(event) {
		const { name, value } = event.target;
		name == "firstName" && setFirstName(() => value);
		name == "lastName" && setLastName(() => value);
		name == "age" && setAge(() => value);
		name == "sex" && setSex(() => value);
		name == "phoneNumber" && setPhoneNumber(() => value);
	}

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
					<Button className="edit-btn" variant="contained" size="small">
						Edit
					</Button>
				</td>
				<td>
					<Button
						className="delete-btn"
						variant="contained"
						size="small"
						color="error"
						onClick={() => {
							deleteEmployeeFromServer(value.id);
							setRefresh(!refresh);
						}}
					>
						Delete
					</Button>
				</td>
			</tr>
		);
	});

	//* Open/Close Modal onChange event
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className="App">
			{modalOpen && (
				<InsertData setRefresh={setRefresh} setOpenModal={setModalOpen} />
			)}

			<h1 className="header">Human Resource Management System</h1>
			<div className="App-container">
				<div className="form">
					<div className="search-insert">
						<SearchBar />
						<Stack className="insert-btn" direction="row" spacing={2}>
							<Button
								className="openModalBtn"
								variant="contained"
								startIcon={<Add />}
								onClick={() => {
									setModalOpen(true);
								}}
							>
								Insert
							</Button>
						</Stack>
					</div>

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
		</div>
	);
}
