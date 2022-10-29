import React, { useEffect, useState } from "react";
import { Stack, Button } from "@mui/material";
import Axios from "axios";
import Add from "@mui/icons-material/Add";
import SearchBar from "./components/SearchBar/SearchBar";
import InsertData from "./components/InsertForm/InsertData";
import UpdateData from "./components/UpdateForm/UpdateData";
import DeleteModal from "./components/DeleteModal/DeleteModal.";
import EmployeeDataList from "./components/EmployeeList/EmployeeList";
import "./styles/App.css";
import axios from "axios";

export default function App() {
	const [refresh, setRefresh] = useState(false);
	const [employeeList, setEmployeeList] = useState([]);

	const refreshState = () => {
		setRefresh((current) => !current);
	};

	const PORT = 3000;
	const URL = `http://localhost:${PORT}`;

	useEffect(loadDataTable, [refresh]);

	function loadDataTable() {
		async function fetchData() {
			await Axios.get(`${URL}/showemployees`).then((res) => {
				setEmployeeList(() => res.data);
			});
		}
		fetchData();
	}

	//* Open/Close Modal onChange event
	const [insertModal, setInsertModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);

	//* Temporary State
	const [deleteId, setDeleteId] = useState(0);
	const [updateId, setUpdateId] = useState(0);

	//*test
	// const [queries, setQueries] = useState([]);
	// useEffect(() => {
	// 	async function fetchData() {
	// 		await Axios.get(`${URL}/searchquery`).then((res) => {
	// 			setQueries(() => res.data);
	// 		});
	// 	}
	// 	console.log(fetchData());
	// }, []);

	return (
		<div className="App">
			{insertModal && (
				<InsertData
					refresh={refresh}
					setRefresh={setRefresh}
					setInsertModal={setInsertModal}
				/>
			)}

			{deleteModal && (
				<DeleteModal
					id={deleteId}
					setDeleteModal={setDeleteModal}
					setRefresh={setRefresh}
				/>
			)}

			{updateModal && (
				<UpdateData
					id={updateId}
					setUpdateModal={setUpdateModal}
					setRefresh={setRefresh}
				/>
			)}

			<h1 className="header">Human Resource Management System</h1>
			<div className="App-container">
				<div className="form">
					<div className="search-insert">
						{/* <SearchBar /> */}
						<Stack className="insert-btn" direction="row" spacing={2}>
							<Button
								className="openModalBtn"
								variant="contained"
								startIcon={<Add />}
								onClick={() => {
									setInsertModal(true);
								}}
							>
								Insert
							</Button>
						</Stack>
					</div>

					<EmployeeDataList
						employees={employeeList}
						setDeleteId={setDeleteId}
						setDeleteModal={setDeleteModal}
						setUpdateId={setUpdateId}
						setUpdateModal={setUpdateModal}
					/>
				</div>
			</div>
		</div>
	);
}
