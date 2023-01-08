import { ReactNode, createContext } from "react";
import useModal from "../hooks/useModal";

type modalContextProviderProps = {
	children: ReactNode;
};

export interface modalCtxInterface {
	insertModal: boolean;
	deleteModal: boolean;
	updateModal: boolean;
}

const modalContext = createContext<modalCtxInterface | null>(null);
const [modal, toggleModal] = useModal();

export function ModalContextProvider({ children }: modalContextProviderProps) {
	return (
		<>test</>
		// <modalContext.Provider value={{ modal, toggleModal }}>
		// 	{children}
		// </modalContext.Provider>
	);
}
