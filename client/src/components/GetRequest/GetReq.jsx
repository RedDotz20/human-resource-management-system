import React, { useState, useEffect } from "react";
import Axios from "axios";
// import "./getReq.css";

export default function GetReq() {
	const [employeeList, setEmployeeList] = useState([]);
	const PORT = 3000;

	useEffect(() => {
		Axios.get(`http://localhost:${PORT}/showemployees`).then((res) => {
			setEmployeeList(res.data);
		});
	}, []);

	return (
		<>
			<table className="content-table">
				<thead>
					<tr>
						<td>id</td>
						<td>FIRST NAME</td>
						<td>LAST NAME</td>
						<td>AGE</td>
						<td>SEX</td>
						<td>PHONE NUMBER</td>
					</tr>
				</thead>
				<tbody>
					{employeeList.map((value) => {
						return (
							<tr>
								<td>{value.id}</td>
								<td>{value.firstName}</td>
								<td>{value.lastName}</td>
								<td className="td-center">{value.age}</td>
								<td className="td-center">{value.sex}</td>
								<td className="td-center">{value.phoneNumber}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
