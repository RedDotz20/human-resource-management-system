import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface deleteBtnInterface {
	deleteId: number;
	setDeleteId: React.Dispatch<React.SetStateAction<number>>;
	setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function DeleteBtn(Props: deleteBtnInterface) {
	const { deleteId, setDeleteId, setDeleteModal } = Props;
	return (
		<IconButton
			className="delete-btn"
			aria-label="delete-btn"
			color="error"
			size="small"
			onClick={() => {
				setDeleteModal(true);
				setDeleteId(deleteId);
			}}
		>
			<DeleteIcon />
		</IconButton>
	);
}

export default DeleteBtn;
