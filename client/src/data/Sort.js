import Axios from "axios";
const PORT = 3000;
const URL = `http://localhost:${PORT}`;

export function sortTable(sortOption, setEmployeeList) {
	async function fetchData() {
		await Axios.get(`${URL}/${sortOption}`)
			.then((response) => {
				setEmployeeList(() => response.data);
			})
			.catch((error) => console.log(error));
	}
	fetchData();
}
