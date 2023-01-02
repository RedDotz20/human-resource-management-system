import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function UpdateBtn({ setUpdateModal, setUpdateId, updateId }: any) {
	return (
		<IconButton
			className="edit-btn"
			aria-label="edit-btn"
			size="small"
			onClick={() => {
				setUpdateModal(true);
				setUpdateId(updateId);
			}}
		>
			<EditIcon />
		</IconButton>
	);
}

export default UpdateBtn;
