import React, { useContext } from "react";
import { DeleteQuery } from "../../data/Data";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./DeleteModal.css";

import { GetValueContext } from "../../contexts/Contexts";

function DeleteModal({ refreshState, setDeleteModal }) {
	const { deleteId } = useContext(GetValueContext);
	return (
		<div className="deleteModalBg">
			<div className="deleteModalCon">
				<CloseIcon
					className="titleCloseBtn"
					onClick={() => {
						setDeleteModal(false);
					}}
				/>

				<h1 className="title">Delete Curent Row</h1>
				<p className="subtitle">
					Are you sue you want to delete the curent row?
				</p>

				<footer>
					<Button
						className="cancel-btn"
						variant="contained"
						size="small"
						onClick={() => {
							setDeleteModal(false);
						}}
					>
						Cancel
					</Button>
					<Button
						className="confirm-btn"
						variant="contained"
						size="small"
						color="error"
						onClick={() => {
							DeleteQuery(deleteId);
							refreshState();
							setDeleteModal(false);
						}}
					>
						Yes, Delete
					</Button>
				</footer>
			</div>
		</div>
	);
}

export default DeleteModal;
