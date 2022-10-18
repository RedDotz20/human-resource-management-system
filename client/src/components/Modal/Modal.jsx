import React from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Modal({ setOpenModal }) {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<CloseIcon
					className="titleCloseBtn"
					onClick={() => {
						setOpenModal(false);
					}}
				/>

				<h1 className="title">Insert</h1>
				<p className="body">
					The next page looks amazing. Hope you want to go there!
				</p>
				<footer className="footer">
					<button
						onClick={() => {
							setOpenModal(false);
						}}
						id="cancelBtn"
					>
						Cancel
					</button>
					<button>Continue</button>
				</footer>
			</div>
		</div>
	);
}
