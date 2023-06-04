import { queryType, readQueryType } from '../interface/apiInterface';
import { formatPascalCase } from '../utilities/formatString';
import { axiosInstance } from './axios';

export async function FetchTableData() {
	return await axiosInstance.get(`/showemployees`).then((res) => res.data);
}

//* Read/Select Table Query Function
export async function ReadQuery(setEmployeeList: readQueryType) {
	await axiosInstance
		.get(`/showemployees`)
		.then((response) => {
			setEmployeeList(() => response.data);
		})
		.catch((error) => console.log(error));
}

//* Create/Insert Query Function
export async function InsertQuery(values: queryType) {
	await axiosInstance
		.post(`/insert`, {
			firstName: formatPascalCase(values.firstName),
			lastName: formatPascalCase(values.lastName),
			age: parseInt(values.age),
			sex: values.sex,
			phoneNumber: values.phoneNumber,
		})
		.catch((error) => console.log(error));
}

//* Update Query Function
export async function UpdateQuery(values: queryType, id: string) {
	await axiosInstance
		.put(`/update`, {
			firstName: formatPascalCase(values.firstName),
			lastName: formatPascalCase(values.lastName),
			age: parseInt(values.age),
			sex: values.sex,
			phoneNumber: values.phoneNumber,
			id: parseInt(id),
		})
		.catch((error) => console.log(error));
}

//* Delete Query Function
export async function DeleteQuery(id: number) {
	await axiosInstance
		.delete(`/delete/?id=${id}`)
		.catch((error) => console.log(error));
}

//* Fetch Query Function
export async function fetchQuery(
	query: string,
	setEmployeeList: readQueryType
) {
	await axiosInstance
		.get(`/searchquery`, {
			params: {
				value: query,
			},
		})
		.then((response) => setEmployeeList(() => response.data))
		.catch((error) => console.log(error));
}

//* Sort Query Function
export async function sortTable(
	sortOption: string,
	setEmployeeList: readQueryType
) {
	await axiosInstance
		.get(`/${sortOption}`)
		.then((response) => {
			setEmployeeList(() => response.data);
		})
		.catch((error) => console.log(error));
}
