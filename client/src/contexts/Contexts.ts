import { createContext, Dispatch, SetStateAction } from 'react';

export interface getValueCtxInterface {
	deleteId: number;
	updateId: number;
	setInsertModal: Dispatch<SetStateAction<boolean>>;
	setDeleteModal: Dispatch<SetStateAction<boolean>>;
	setUpdateModal: Dispatch<SetStateAction<boolean>>;
}

export const GetValueContext = createContext<any | null>(null);
