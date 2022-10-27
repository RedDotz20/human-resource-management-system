import React from "react";
import Axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

function DeleteModal({ id, refresh, setRefresh, setDeleteModal }) {
	function deleteEmployee(idValue) {
		Axios.delete(`http://localhost:3000/delete/${idValue}`);
	}

	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<CloseIcon
					className="titleCloseBtn"
					onClick={() => {
						setDeleteModal(false);
					}}
				/>

				<h1 className="title">Delete Curent Row</h1>
				<p className="title">Are you sue you want to delete the curent row?</p>

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
						onClick={() => {
							deleteEmployee(id);
							setRefresh(!refresh);
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
