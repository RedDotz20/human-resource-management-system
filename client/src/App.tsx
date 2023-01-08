import React, { useEffect, useState } from "react";
import { GetValueContext, ModalContext } from "./contexts/Contexts";
import { ReadQuery, fetchQuery, sortTable } from "./data/Data";
import { InsertBtn } from "./components/Button/InsertBtn";
import EmployeeDataList from "./components/EmployeeList/EmployeeList";
import SortMenuBtn from "./components/Button/SortMenu";
import SearchBar from "./components/SearchBar/SearchBar";
import Modal from "./components/Modal/Modal";

import useModal from "./hooks/useModal";

const App = (): JSX.Element => {
	const [employeeList, setEmployeeList] = useState([]);
	const [sortOptions, setSortOptions] = useState("");
	const [searchQuery, setSearchQuery] = useState(null);

	//? useModal Custom Hook
	const [modalState, modalToggles] = useModal();

	const [insertModal, setInsertModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);

	const [deleteId, setDeleteId] = useState(0);
	const [updateId, setUpdateId] = useState(0);

	useEffect(() => {
		if (searchQuery !== null) {
			fetchQuery(searchQuery, setEmployeeList);
		} else if (sortOptions !== "") {
			sortTable(sortOptions, setEmployeeList);
		} else ReadQuery(setEmployeeList);
	}, [insertModal, deleteModal, updateModal, sortOptions, searchQuery]);

	return (
		<div className="App h-screen flex flex-col items-center">
			<GetValueContext.Provider
				value={{
					deleteId,
					updateId,
					setInsertModal,
					setDeleteModal,
					setUpdateModal,
				}}
			>
				<ModalContext.Provider
					value={{ insertModal, deleteModal, updateModal }}
				>
					<Modal employeeList={employeeList} />
				</ModalContext.Provider>
			</GetValueContext.Provider>

			<h1 className="App-container text-white text-center text-3xl p-8 font-semibold">
				Human Resource Management System
			</h1>

			<div className="bg-slate-50 p-8 my-0 mx-12 min-w-[920px] max-w-[1028px] rounded-2xl max-h-[28rem]">
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
	);
};

export default App;
