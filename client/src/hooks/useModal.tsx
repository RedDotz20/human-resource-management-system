import { useState } from "react";

type ModalState = {
	insert: boolean;
	delete: boolean;
	update: boolean;
};

type ModalToggles = {
	[K in keyof ModalState]: () => void;
};

const useModal = (): [ModalState, ModalToggles] => {
	const [modalState, setModalState] = useState<ModalState>({
		insert: false,
		delete: false,
		update: false,
	});

	const handleModal = (modalName: keyof ModalState) => {
		setModalState((state) => ({
			...state,
			[modalName]: !state[modalName],
		}));
	};

	const modalToggles: ModalToggles = {
		insert: () => handleModal("insert"),
		delete: () => handleModal("delete"),
		update: () => handleModal("update"),
	};

	return [modalState, modalToggles];
};

export default useModal;
//? --- HOOK USAGE ---

// import useModal, { ModalState, ModalToggles } from "./useModal";

// const MyComponent: React.FC = () => {
//   const [modalState, modalToggles] = useModal();

//   return (
//     <>
//       <button onClick={modalToggles.insert}>Toggle insert modal</button>
//       <button onClick={modalToggles.delete}>Toggle delete modal</button>
//       <button onClick={modalToggles.update}>Toggle update modal</button>
//       {modalState.insert && <div>Insert modal is open</div>}
//       {modalState.delete && <div>Delete modal is open</div>}
//       {modalState.update && <div>Update modal is open</div>}
//     </>
//   );
// };

//! to toggle the insert modal:
//* handleModal("insert");

//! to check if the insert modal is open:
//* if (modalState.insert) {
//*   {//...//}
//* }
