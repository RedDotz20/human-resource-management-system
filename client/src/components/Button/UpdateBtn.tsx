import { IconButton } from "@mui/material";
import { useModal } from "../Modal/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { updateBtnInterface } from "../../interface/buttonInterface";

function UpdateBtn({ updateId, setUpdateId }: updateBtnInterface) {
	const { setUpdate } = useModal((state) => ({
		setUpdate: state.setUpdate,
	}));

	return (
		<IconButton
			className="edit-btn"
			aria-label="edit-btn"
			size="small"
			onClick={() => {
				setUpdate();
				setUpdateId(updateId);
			}}
		>
			<EditIcon />
		</IconButton>
	);
}

export default UpdateBtn;
