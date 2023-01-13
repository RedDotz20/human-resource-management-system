import { useState } from "react";

type ModalState = {
	insert: boolean;
	delete: boolean;
	update: boolean;
};

type ModalToggles = {
	[K in keyof ModalState]: () => void;
};

interface useModalInterface {
	modalState: ModalState;
	modalToggles: ModalToggles;
}

function useModal(): useModalInterface {
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

	return { modalState, modalToggles };
}

export default useModal;
