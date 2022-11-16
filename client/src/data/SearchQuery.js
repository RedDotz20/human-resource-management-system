import Axios from "axios";
const PORT = 3000;
const URL = `http://localhost:${PORT}`;

export default function fetchQuery(query, setEmployeeList) {
	Axios.get(`${URL}/searchquery`, {
		params: {
			value: query,
		},
	})
		.then((response) => setEmployeeList(() => response.data))
		.catch((error) => console.log(error));
}
