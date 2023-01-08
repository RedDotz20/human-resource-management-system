import { createContext, Dispatch, SetStateAction } from "react";
// import {
// 	getValueCtxInterface,
// 	modalCtxInterface,
// } from "../interface/contextInterface";

export interface modalCtxInterface {
	insertModal: boolean;
	deleteModal: boolean;
	updateModal: boolean;
}

export interface getValueCtxInterface {
	deleteId: number;
	updateId: number;
	setInsertModal: Dispatch<SetStateAction<boolean>>;
	setDeleteModal: Dispatch<SetStateAction<boolean>>;
	setUpdateModal: Dispatch<SetStateAction<boolean>>;
}

export const GetValueContext = createContext<any | null>(null);
export const ModalContext = createContext<any | null>(null);
