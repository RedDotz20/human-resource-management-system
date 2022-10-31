import Axios from "axios";
const PORT = 3000;

//* Read/Select Table Query Function
export function ReadQuery(setEmployeeList) {
	async function fetchData() {
		await Axios.get(`http://localhost:${PORT}/showemployees`)
			.then((response) => {
				setEmployeeList(() => response.data);
			})
			.catch((error) => console.log(error));
	}
	fetchData();
}

//* Create/Insert Query Function
export function InsertQuery(values) {
	Axios.post(`http://localhost:${PORT}/insert`, {
		firstName: values.firstName,
		lastName: values.lastName,
		age: values.age,
		sex: values.sex,
		phoneNumber: values.phoneNumber,
	}).catch((error) => console.log(error));
}

//* Update Query Function
export function UpdateQuery(values, id) {
	Axios.put(`http://localhost:${PORT}/update`, {
		firstName: values.firstName,
		lastName: values.lastName,
		age: values.age,
		sex: values.sex,
		phoneNumber: values.phoneNumber,
		id: id,
	}).catch((error) => console.log(error));
}

//* Delete Query Function
export function DeleteQuery(id) {
	Axios.delete(`http://localhost:${PORT}/delete/${id}`).catch((error) =>
		console.log(error)
	);
}
