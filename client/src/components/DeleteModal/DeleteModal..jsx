import React from "react";
import { DeleteQuery } from "../../data/Data";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import "./DeleteModal.css";

function DeleteModal({ id, refreshState, setDeleteModal }) {
	return (
		<div className="deleteModalBg">
			{/* <div className="deleteIconCon">
				<DeleteForeverIcon className="deleteIcon" />
			</div> */}
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
							DeleteQuery(id);
							refreshState();
							// setRefresh(!refresh);
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
