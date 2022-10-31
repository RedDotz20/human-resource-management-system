import React, { useEffect, useState, useCallback } from "react";
import { Stack, Button } from "@mui/material";
import Axios from "axios";
import Add from "@mui/icons-material/Add";
// import SearchBar from "./components/SearchBar/SearchBar";
import InsertData from "./components/InsertForm/InsertData";
import UpdateData from "./components/UpdateForm/UpdateData";
import DeleteModal from "./components/DeleteModal/DeleteModal.";
import EmployeeDataList from "./components/EmployeeList/EmployeeList";
import "./styles/App.css";

import { ReadQuery } from "./data/Data";

export default function App() {
	const [employeeList, setEmployeeList] = useState([]);
	const [refresh, setRefresh] = useState(false);
	// const toggleRefresh = useCallback(() => setRefresh(!refresh));
	// const refreshState = () => {
	// 	setRefresh((current) => !current);
	// };
	console.log("the type is " + typeof refresh, refresh);

	const PORT = 3000;
	const URL = `http://localhost:${PORT}`;

	useEffect(() => {
		ReadQuery(setEmployeeList);
		// loadDataTable();
	}, [refresh]);

	//* Open/Close Modal onChange event
	const [insertModal, setInsertModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);

	//* Temporary State
	const [deleteId, setDeleteId] = useState(0);
	const [updateId, setUpdateId] = useState(0);

	//*test
	const [queries, setQueries] = useState([]);

	function getSearchQueries() {
		Axios.get(`${URL}/searchquery`).then((res) => {
			setQueries(() =>
				res.data.map((val) => `${val.firstName} ${val.LastName}`)
			);
		});
		console.log(queries);
	}

	useEffect(getSearchQueries, []);

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
						<button onClick={() => getSearchQueries()}>GET QUERIES TEST</button>
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
