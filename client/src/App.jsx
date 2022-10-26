import React, { useEffect, useState } from "react";
import { Stack, Button } from "@mui/material";
import Axios from "axios";
import Add from "@mui/icons-material/Add";
import SearchBar from "./components/SearchBar/SearchBar";
import InsertData from "./components/InsertForm/InsertData";
import DeleteModal from "./components/DeleteModal/DeleteModal.";
import EmployeeDataList from "./components/EmployeeList/EmployeeList";
import "./styles/App.css";

export default function App() {
	const [refresh, setRefresh] = useState(false);
	const [employeeList, setEmployeeList] = useState([]);
	const PORT = 3000;
	const URL = `http://localhost:${PORT}`;

	useEffect(getDataFromServer, [refresh]);

	function getDataFromServer() {
		Axios.get(`${URL}/showemployees`).then((res) => {
			setEmployeeList(() => res.data);
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

	//* Open/Close Modal onChange event
	const [modalOpen, setModalOpen] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	//* Temporary State
	// const [deleteId, setDeleteId] = useState(0);

	return (
		<div className="App">
			{modalOpen && (
				<InsertData
					refresh={refresh}
					setRefresh={setRefresh}
					setOpenModal={setModalOpen}
				/>
			)}

			{deleteModal && (
				<DeleteModal
					refresh={refresh}
					setRefresh={setRefresh}
					deleteModal={setDeleteModal}
				/>
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

					<EmployeeDataList employees={employeeList} />
				</div>
			</div>
		</div>
	);
}
