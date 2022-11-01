import Axios from "axios";
const PORT = 3000;

export function sortTable(sortOption, setEmployeeList) {
	async function fetchData() {
		await Axios.get(`http://localhost:${PORT}/${sortOption}`)
			.then((response) => {
				setEmployeeList(() => response.data);
			})
			.catch((error) => console.log(error));
	}
	fetchData();
}
