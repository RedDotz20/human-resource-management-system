import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function UpdateBtn({ setUpdateModal, setUpdateId, updateId }) {
	return (
		<IconButton
			className="edit-btn"
			variant="contained"
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
