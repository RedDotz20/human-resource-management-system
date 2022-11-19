import React, { useEffect, useState } from "react";
import Background from "./components/BackgroundImage/Background";
import SearchBar from "./components/SearchBar/SearchBar";
import SortMenuBtn from "./components/Button/SortMenu";

import EmployeeDataList from "./components/EmployeeList/EmployeeList";
import InsertData from "./components/Forms/InsertData";
import UpdateData from "./components/Forms/UpdateData";
import DeleteData from "./components/Forms/DeleteData";
import "./styles/App.css";

import { InsertBtn } from "./components/Button/InsertBtn";
import { ReadQuery, fetchQuery, sortTable } from "./data/Data";
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
						<DeleteData
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

				<h1 className="App-container text-white text-center text-3xl p-8 font-semibold">
					Human Resource Management System
				</h1>
				<div className=" bg-slate-50 p-8 my-0 mx-auto rounded-2xl max-w-screen-lg">
					<div className="form">
						<div className="child:mx-4 w-full flex justify-between ">
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
