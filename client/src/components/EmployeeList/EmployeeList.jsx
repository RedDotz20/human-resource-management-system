import React from "react";
import DeleteBtn from "../Button/DeleteBtn";
import UpdateBtn from "../Button/UpdateBtn";

const TableHeader = () => {
	return (
		<thead>
			<tr className="child-td:py-1 child-td:px-4 bg-[#089879] text-white font-bold text-center">
				<td>ID</td>
				<td>FIRST NAME</td>
				<td>LAST NAME</td>
				<td>AGE</td>
				<td>SEX</td>
				<td>PHONE NUMBER</td>
				<td>ACTIONS</td>
			</tr>
		</thead>
	);
};

const EmptyTable = () => {
	return (
		<tr className="child-td:py-1 child-td:px-4">
			<td colSpan={"7"} className="text-center h-20">
				EMPTY TABLE
			</td>
		</tr>
	);
};

export default function EmployeeDataList({
	employees,
	setDeleteId,
	setDeleteModal,
	setUpdateId,
	setUpdateModal,
}) {
	return (
		<table className="border-collapse my-8 mx-auto text-base min-w-fit shadow-xl child-th:py-1 child-th:px-4">
			<TableHeader />

			<tbody className="b-bottom b-color-even b-color-last">
				{employees.length <= 0 ? (
					<EmptyTable />
				) : (
					employees.map((values) => {
						const { id, firstName, lastName, age, sex, phoneNumber } = values;
						return (
							<tr
								className="child-td:py-1 child-td:px-4 child-td:text-center"
								key={id}
							>
								<td>{id}</td>
								<td>{firstName}</td>
								<td>{lastName}</td>
								<td>{age}</td>
								<td>{sex}</td>
								<td>{phoneNumber}</td>
								<td>
									<UpdateBtn
										setUpdateModal={setUpdateModal}
										setUpdateId={setUpdateId}
										updateId={id}
									/>

									<DeleteBtn
										setDeleteModal={setDeleteModal}
										setDeleteId={setDeleteId}
										deleteId={id}
									/>
								</td>
							</tr>
						);
					})
				)}
			</tbody>
		</table>
	);
}
