import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteBtn({ setDeleteModal, setDeleteId, deleteId }: any) {
	return (
		<>
			<IconButton
				className="delete-btn"
				aria-label="delete-btn"
				size="small"
				onClick={() => {
					setDeleteModal(true);
					setDeleteId(deleteId);
				}}
			>
				<DeleteIcon />
			</IconButton>
		</>
	);
}

export default DeleteBtn;
