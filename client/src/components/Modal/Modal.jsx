import React, { useState } from "react";
// import InsertData from "../InsertForm/InsertData";
// import UpdateData from "../UpdateForm/UpdateData";
import DeleteModal from "../Forms/DeleteData";

export default function Modal({ refreshState, setDeleteId }) {
	//* Open/Close Modal onChange event
	// const [insertModal, setInsertModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	// const [updateModal, setUpdateModal] = useState(false);

	//* Temporary State
	const [deleteId, setDeleteId] = useState(0);
	// const [updateId, setUpdateId] = useState(0);
	console.log(deleteId);

	return (
		<>
			//TODO: Confirm Message
			{/* <Confirm message={"Data Successfully Inserted"} /> */}
			//TODO: Modal Component
			{/* {insertModal && (
				<InsertData
					refreshState={refreshState}
					setInsertModal={setInsertModal}
				/>
			)} */}
			{deleteModal && (
				<DeleteModal
					// id={deleteId}
					refreshState={refreshState}
					setDeleteModal={setDeleteModal}
				/>
			)}
			{/* {updateModal && (
				<UpdateData
					id={updateId}
					refreshState={refreshState}
					setUpdateModal={setUpdateModal}
				/>
			)} */}
		</>
	);
}
