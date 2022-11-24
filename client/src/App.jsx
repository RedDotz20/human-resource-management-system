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
import { GetValueContext, RefreshContext, States } from "./contexts/Contexts";

export default function App() {
	const [employeeList, setEmployeeList] = useState([]),
		[sortOptions, setSortOptions] = useState(""),
		[searchQuery, setSearchQuery] = useState(null),
		[refresh, setRefresh] = useState(false);

	function refreshState() {
		setRefresh((currentState) => !currentState);
	}

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
				<RefreshContext.Provider value={{ refreshState }}>
					<GetValueContext.Provider value={{ deleteId, updateId }}>
						<States.Provider value={{}}>
							{insertModal && <InsertData setInsertModal={setInsertModal} />}
							{deleteModal && <DeleteData setDeleteModal={setDeleteModal} />}
							{updateModal && (
								<UpdateData
									employeeList={employeeList}
									setUpdateModal={setUpdateModal}
								/>
							)}
						</States.Provider>
					</GetValueContext.Provider>

					<h1 className="App-container text-white text-center text-3xl p-8 font-semibold">
						Human Resource Management System
					</h1>
					<div className=" bg-slate-50 p-8 my-0 mx-auto rounded-2xl min-w-[920px] max-w-[920px] max-h-[28rem]">
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
				</RefreshContext.Provider>
			</div>
		</>
	);
}
