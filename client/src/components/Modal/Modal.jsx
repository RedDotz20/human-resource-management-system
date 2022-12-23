import { useContext, lazy, Suspense } from "react";
import { ModalContext } from "../../contexts/Contexts";
const InsertData = lazy(() => import("../Forms/InsertData"));
const UpdateData = lazy(() => import("../Forms/UpdateData"));
const DeleteData = lazy(() => import("../Forms/DeleteData"));

export default function Modal({ employeeList }) {
	const { insertModal, deleteModal, updateModal } = useContext(ModalContext);
	return (
		<Suspense>
			{insertModal && <InsertData />}
			{deleteModal && <DeleteData />}
			{updateModal && <UpdateData employeeList={employeeList} />}
		</Suspense>
	);
}
