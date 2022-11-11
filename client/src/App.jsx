import React, { useEffect, useState } from "react";
import Background from "./components/BackgroundImage/Background";
import ReadQuery from "./data/Data";
import SearchBar from "./components/SearchBar/SearchBar";
import SortMenuBtn from "./components/Button/SortMenu";

import EmployeeDataList from "./components/EmployeeList/EmployeeList";
import InsertData from "./components/InsertForm/InsertData";
import UpdateData from "./components/UpdateForm/UpdateData";
import DeleteModal from "./components/DeleteModal/DeleteModal.";
import "./styles/App.css";

import { sortTable } from "./data/Sort";
import { InsertBtn } from "./components/Button/InsertBtn";
import fetchQuery from "./data/SearchQuery";
// import Modal from "./components/Modal/Modal";

import { GetValueContext } from "./contexts/Contexts";

export default function App() {
	const [employeeList, setEmployeeList] = useState([]),
		[sortOptions, setSortOptions] = useState(""),
		[searchQuery, setSearchQuery] = useState(null),
		[refresh, setRefresh] = useState(false);

	const refreshState = () => setRefresh((current) => !current);

	useEffect(() => {
		if (searchQuery !== null) {
			fetchQuery(searchQuery, setEmployeeList);
		} else if (sortOptions !== "") {
			sortTable(sortOptions, setEmployeeList);
		} else ReadQuery(setEmployeeList);
	}, [refresh, sortOptions, searchQuery]);

	//* Open/Close Modal onChange event
	const [insertModal, setInsertModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);

	//* ID States
	const [deleteId, setDeleteId] = useState(0);
	const [updateId, setUpdateId] = useState(0);

	return (
		<>
			<Background />
			<div className="App">
				{/* <Modal refreshState={refreshState} setDeleteId={setDeleteId} /> */}
				<GetValueContext.Provider value={{ deleteId, updateId }}>
					{insertModal && (
						<InsertData
							refreshState={refreshState}
							setInsertModal={setInsertModal}
						/>
					)}

					{deleteModal && (
						<DeleteModal
							refreshState={refreshState}
							setDeleteModal={setDeleteModal}
						/>
					)}

					{updateModal && (
						<UpdateData
							employeeList={employeeList}
							refreshState={refreshState}
							setUpdateModal={setUpdateModal}
						/>
					)}
				</GetValueContext.Provider>

				<h1 className="header">Human Resource Management System</h1>
				<div className="App-container">
					<div className="form">
						<div className="search-insert">
							<SortMenuBtn setSortOptions={setSortOptions} />
							<SearchBar
								employeeList={employeeList}
								setSearchQuery={setSearchQuery}
							/>
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
		</>
	);
}
