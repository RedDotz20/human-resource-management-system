import React, { useEffect, useState, useCallback } from "react";
import { ReadQuery, InsertQuery, UpdateQuery, DeleteQuery } from "./data/Data";
import { Stack, Button } from "@mui/material";
import Axios from "axios";
import Add from "@mui/icons-material/Add";
// import SearchBar from "./components/SearchBar/SearchBar";
import InsertData from "./components/InsertForm/InsertData";
import UpdateData from "./components/UpdateForm/UpdateData";
import DeleteModal from "./components/DeleteModal/DeleteModal.";
import EmployeeDataList from "./components/EmployeeList/EmployeeList";
import "./styles/App.css";

import getSearchQueries from "./data/SearchQuery";

export default function App() {
	const [employeeList, setEmployeeList] = useState([]);
	const [refresh, setRefresh] = useState(false);

	const refreshState = () => {
		setRefresh((current) => !current);
	};

	useEffect(() => {
		ReadQuery(setEmployeeList);
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

	// useEffect(() => {
	// 	getSearchQueries(setQueries);
	// }, []);

	return (
		<div className="App">
			{insertModal && (
				<InsertData
					refreshState={refreshState}
					setInsertModal={setInsertModal}
				/>
			)}

			{deleteModal && (
				<DeleteModal
					id={deleteId}
					refreshState={refreshState}
					setDeleteModal={setDeleteModal}
				/>
			)}

			{updateModal && (
				<UpdateData
					id={updateId}
					employeeList={employeeList}
					refreshState={refreshState}
					setUpdateModal={setUpdateModal}
				/>
			)}

			<h1 className="header">Human Resource Management System</h1>
			<div className="App-container">
				<div className="form">
					<div className="search-insert">
						<button
							onClick={() => {
								getSearchQueries(setQueries);
								console.log(queries);
							}}
						>
							GET QUERIES TEST
						</button>

						<button
							onClick={() => {
								const info = employeeList
									.map((values) => values.id)
									.indexOf(124);

								console.log(
									employeeList.map((values) => values.firstName)[info]
								);
							}}
						>
							TEST ARRAY
						</button>

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
