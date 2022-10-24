import React from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function EmployeeDataList({ employees }) {
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
					<td>ACTIONS</td>
				</tr>
			</thead>

			<tbody>
				{employees.map((values) => {
					return (
						<tr key={values.id}>
							<td>{values.id}</td>
							<td>{values.firstName}</td>
							<td>{values.lastName}</td>
							<td className="td-center">{values.age}</td>
							<td className="td-center">{values.sex}</td>
							<td className="td-center">{values.phoneNumber}</td>
							<td>
								{/* <Button className="edit-btn" variant="contained" size="small">
									Edit
								</Button> */}

								<IconButton>
									<EditIcon />
								</IconButton>

								<IconButton
									className="delete-btn"
									variant="contained"
									size="small"
									color="error"
									onClick={() => {
										deleteEmployeeFromServer(value.id);
										setRefresh(!refresh);
										console.log(refresh);
									}}
								>
									<DeleteIcon />
								</IconButton>

								{/* <Button
									className="delete-btn"
									variant="contained"
									size="small"
									color="error"
									onClick={() => {
										deleteEmployeeFromServer(value.id);
										setRefresh(!refresh);
										console.log(refresh);
									}}
								>
									Delete
								</Button> */}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
