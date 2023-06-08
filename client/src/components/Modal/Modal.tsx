import { lazy, Suspense } from 'react';
import { create } from 'zustand';

const InsertData = lazy(() => import('../Forms/InsertData'));
const UpdateData = lazy(() => import('../Forms/UpdateData'));
const DeleteData = lazy(() => import('../Forms/DeleteData'));

interface modalInterface {
	insertModal: boolean;
	deleteModal: boolean;
	updateModal: boolean;
	setInsert: () => void;
	setDelete: () => void;
	setUpdate: () => void;
}

export const useModal = create<modalInterface>((set) => ({
	insertModal: false,
	deleteModal: false,
	updateModal: false,
	setInsert: () =>
		set((state) => ({ ...state, insertModal: !state.insertModal })),
	setDelete: () =>
		set((state) => ({ ...state, deleteModal: !state.deleteModal })),
	setUpdate: () =>
		set((state) => ({ ...state, updateModal: !state.updateModal })),
}));

export default function Modal({ employeeList }: any) {
	const { insertModal, deleteModal, updateModal } = useModal((state) => ({
		insertModal: state.insertModal,
		deleteModal: state.deleteModal,
		updateModal: state.updateModal,
	}));

	return (
		<Suspense>
			{insertModal && <InsertData />}
			{updateModal && <UpdateData employeeList={employeeList} />}
			{deleteModal && <DeleteData />}
		</Suspense>
	);
}
