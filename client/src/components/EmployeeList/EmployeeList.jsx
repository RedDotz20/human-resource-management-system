import React from "react";
import { Button } from "@mui/material";

function EmployeeTable() {
	return <table className="content-table"></table>;
}

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
					<td></td>
					<td></td>
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
								<Button className="edit-btn" variant="contained" size="small">
									Edit
								</Button>
							</td>
							<td>
								<Button
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
								</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

// export const employeeListComponents = employeeList.map((value) => {
// 	return (
// 		<tr key={value.id}>
// 			<td>{value.id}</td>
// 			<td>{value.firstName}</td>
// 			<td>{value.lastName}</td>
// 			<td className="td-center">{value.age}</td>
// 			<td className="td-center">{value.sex}</td>
// 			<td className="td-center">{value.phoneNumber}</td>
// 			<td>
// 				<Button className="edit-btn" variant="contained" size="small">
// 					Edit
// 				</Button>
// 			</td>
// 			<td>
// 				<Button
// 					className="delete-btn"
// 					variant="contained"
// 					size="small"
// 					color="error"
// 					onClick={() => {
// 						deleteEmployeeFromServer(value.id);
// 						setRefresh(!refresh);
// 						console.log(refresh);
// 					}}
// 				>
// 					Delete
// 				</Button>
// 			</td>
// 		</tr>
// 	);
// });
