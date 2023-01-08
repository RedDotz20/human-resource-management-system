import { formatPascalCase } from "../utilities/formatString";
import Axios from "axios";

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

export async function FetchTableData() {
	return await Axios.get(`${URL}/showemployees`).then((res) => res.data);
}

//* Read/Select Table Query Function
export function ReadQuery(setEmployeeList: any) {
	async function fetchData() {
		await Axios.get(`${URL}/showemployees`)
			.then((response) => {
				setEmployeeList(() => response.data);
			})
			.catch((error) => console.log(error));
	}
	fetchData();
}

//* Create/Insert Query Function
export function InsertQuery(values: any) {
	Axios.post(`${URL}/insert`, {
		firstName: formatPascalCase(values.firstName),
		lastName: formatPascalCase(values.lastName),
		age: parseInt(values.age),
		sex: values.sex,
		phoneNumber: values.phoneNumber,
	}).catch((error) => console.log(error));
}

//* Update Query Function
export function UpdateQuery(values: any, id: any) {
	Axios.put(`${URL}/update`, {
		firstName: formatPascalCase(values.firstName),
		lastName: formatPascalCase(values.lastName),
		age: parseInt(values.age),
		sex: values.sex,
		phoneNumber: values.phoneNumber,
		id: parseInt(id),
	}).catch((error) => console.log(error));
}

//* Delete Query Function
export function DeleteQuery(id: any) {
	Axios.delete(`${URL}/delete/${id}`).catch((error) => console.log(error));
}

//* Fetch Query Function
export function fetchQuery(query: any, setEmployeeList: any) {
	Axios.get(`${URL}/searchquery`, {
		params: {
			value: query,
		},
	})
		.then((response) => setEmployeeList(() => response.data))
		.catch((error) => console.log(error));
}

//* Sort Query Function
export function sortTable(sortOption: any, setEmployeeList: any) {
	async function fetchData() {
		await Axios.get(`${URL}/${sortOption}`)
			.then((response) => {
				setEmployeeList(() => response.data);
			})
			.catch((error) => console.log(error));
	}
	fetchData();
}
