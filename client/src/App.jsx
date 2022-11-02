import React, { useEffect, useState } from "react";
import { ReadQuery } from "./data/Data";
import SearchBar from "./components/SearchBar/SearchBar";
import EmployeeDataList from "./components/EmployeeList/EmployeeList";
import InsertData from "./components/InsertForm/InsertData";
import UpdateData from "./components/UpdateForm/UpdateData";
import DeleteModal from "./components/DeleteModal/DeleteModal.";
import "./styles/App.css";

import { sortTable } from "./data/Sort";
import { InsertBtn } from "./components/Button/InsertBtn";
import getSearchQueries from "./data/SearchQuery";
import SortMenuBtn from "./components/Button/SortMenu";

export default function App() {
	const [employeeList, setEmployeeList] = useState([]),
		[sortOptions, setSortOptions] = useState(""),
		[refresh, setRefresh] = useState(false);

	const refreshState = () => {
		setRefresh((current) => !current);
	};

	useEffect(() => {
		sortOptions === ""
			? ReadQuery(setEmployeeList)
			: sortTable(sortOptions, setEmployeeList);
	}, [refresh, sortOptions]);

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
						{/* <SortBtn setSortOptions={setSortOptions} /> */}

						<SortMenuBtn setSortOptions={setSortOptions} />

						{/* <button
							onClick={() => {
								getSearchQueries(setQueries);
								console.log(queries);
							}}
						>
							GET QUERIES TEST
						</button> */}

						{/* <button
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
						</button> */}

						{/* <SearchBar /> */}
						<InsertBtn setInsertModal={setInsertModal} />
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
