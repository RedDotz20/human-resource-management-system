import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./EmployeeList.css";

export default function EmployeeDataList({
	employees,
	//* Delete Modal
	setDeleteId,
	setDeleteModal,
	//* Update Modal
	setUpdateId,
	setUpdateModal,
}) {
	return (
		<table className="content-table">
			<thead>
				<tr>
					<td>id</td>
					<td>FIRST NAME</td>
					<td>LAST NAME</td>
					<td>AGE</td>
					<td>SEX</td>
					<td>PHONE NUMBER</td>
					<td className="no-padding">ACTIONS</td>
				</tr>
			</thead>

			<tbody>
				{employees.length <= 0 ? (
					<tr>
						<td colSpan={"7"} className="td-center empty">
							EMPTY TABLE
						</td>
					</tr>
				) : (
					employees.map((values) => {
						return (
							<tr key={values.id}>
								<td>{values.id}</td>
								<td>{values.firstName}</td>
								<td>{values.lastName}</td>
								<td className="td-center">{values.age}</td>
								<td className="td-center">{values.sex}</td>
								<td className="td-center">{values.phoneNumber}</td>
								<td>
									<IconButton
										className="edit-btn"
										variant="contained"
										size="small"
										onClick={() => {
											setUpdateModal(true);
											setUpdateId(values.id);
										}}
									>
										<EditIcon />
									</IconButton>

									<IconButton
										className="delete-btn"
										variant="contained"
										size="small"
										color="error"
										onClick={() => {
											setDeleteModal(true);
											setDeleteId(values.id);
										}}
									>
										<DeleteIcon />
									</IconButton>
								</td>
							</tr>
						);
					})
				)}
			</tbody>
		</table>
	);
}
