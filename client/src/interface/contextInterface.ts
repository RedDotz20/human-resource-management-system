export interface modalCtxInterface {
	insertModal: boolean;
	deleteModal: boolean;
	updateModal: boolean;
}

export interface getValueCtxInterface {
	deleteId: number;
	updateId: number;
	setInsertModal: React.Dispatch<React.SetStateAction<boolean>>;
	setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
	setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}
