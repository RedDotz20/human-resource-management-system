import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useModal } from "../Modal/Modal";
interface deleteBtnInterface {
	deleteId: number;
	setDeleteId: React.Dispatch<React.SetStateAction<number>>;
}

function DeleteBtn({ deleteId, setDeleteId }: deleteBtnInterface) {
	const { setDelete } = useModal((state) => ({
		setDelete: state.setDelete,
	}));

	return (
		<IconButton
			className="delete-btn"
			aria-label="delete-btn"
			color="error"
			size="small"
			onClick={() => {
				setDelete();
				setDeleteId(deleteId);
			}}
		>
			<DeleteIcon />
		</IconButton>
	);
}

export default DeleteBtn;
