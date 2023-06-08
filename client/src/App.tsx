import { useEffect, useState } from 'react';
import { ReadQuery, fetchQuery, sortTable } from './api/Data';
import { InsertBtn } from './components/Button/InsertBtn';
import SortMenuBtn from './components/Button/SortMenu';
import EmployeeDataList from './components/EmployeeList/EmployeeList';
import Modal, { useModal } from './components/Modal/Modal';
import SearchBar from './components/SearchBar/SearchBar';
import { GetValueContext } from './contexts/Contexts';

export default function App() {
	const [employeeList, setEmployeeList] = useState([]);
	const [sortOptions, setSortOptions] = useState('');
	const [searchQuery, setSearchQuery] = useState(null);
	const [deleteId, setDeleteId] = useState(0);
	const [updateId, setUpdateId] = useState(0);

	const { insertModal, deleteModal, updateModal } = useModal((state) => ({
		insertModal: state.insertModal,
		deleteModal: state.deleteModal,
		updateModal: state.updateModal,
	}));

	useEffect(() => {
		if (searchQuery !== null) {
			fetchQuery(searchQuery, setEmployeeList);
		} else if (sortOptions !== '') {
			sortTable(sortOptions, setEmployeeList);
		} else ReadQuery(setEmployeeList);
	}, [insertModal, deleteModal, updateModal, sortOptions, searchQuery]);

	return (
		<div className="App h-screen flex flex-col items-center">
			<GetValueContext.Provider value={{ deleteId, updateId }}>
				<Modal employeeList={employeeList} />
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
					<InsertBtn />
				</div>

				<EmployeeDataList
					employeeList={employeeList}
					setDeleteId={setDeleteId}
					setUpdateId={setUpdateId}
				/>
			</div>
		</div>
	);
}
