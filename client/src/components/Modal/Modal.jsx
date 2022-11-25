import React, { useContext } from "react";
import InsertData from "../Forms/InsertData";
import UpdateData from "../Forms/UpdateData";
import DeleteData from "../Forms/DeleteData";

import { ModalContext } from "../../contexts/Contexts";

export default function Modal({ employeeList }) {
	const { insertModal, deleteModal, updateModal } = useContext(ModalContext);
	return (
		<>
			{insertModal && <InsertData />}
			{deleteModal && <DeleteData />}
			{updateModal && <UpdateData employeeList={employeeList} />}
		</>
	);
}
