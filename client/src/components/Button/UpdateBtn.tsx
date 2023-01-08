import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

interface updateBtnInterface {
	updateId: number;
	setUpdateId: React.Dispatch<React.SetStateAction<number>>;
	setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function UpdateBtn(Props: updateBtnInterface) {
	const { setUpdateModal, setUpdateId, updateId } = Props;
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
