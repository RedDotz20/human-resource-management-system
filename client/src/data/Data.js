import Axios from "axios";

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

//* Read/Select Table Query Function
export function ReadQuery(setEmployeeList) {
	async function fetchData() {
		await Axios.get(`${URL}/showemployees`).then((response) => {
			setEmployeeList(() => response.data);
		});
	}
	fetchData();
}

//* Create/Insert Query Function
export function InsertQuery(values) {
	try {
		Axios.post(`${URL}/insert`, {
			firstName: values.firstName,
			lastName: values.lastName,
			age: values.age,
			sex: values.sex,
			phoneNumber: values.phoneNumber,
		});
	} catch (error) {
		throw error;
	}
}

//* Update Query Function
export function UpdateQuery(values, id) {
	try {
		Axios.put(`${URL}/update`, {
			firstName: values.firstName,
			lastName: values.lastName,
			age: values.age,
			sex: values.sex,
			phoneNumber: values.phoneNumber,
			id: id,
		});
	} catch (error) {
		throw error;
	}
}

//* Delete Query Function
export function DeleteQuery(id) {
	try {
		Axios.delete(`http://localhost:3000/delete/${id}`);
	} catch (error) {
		throw error;
	}
}
