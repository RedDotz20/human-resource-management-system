import Axios from "axios";
const PORT = 3000;

export default function fetchQuery(query, setEmployeeList) {
	Axios.get(`http://localhost:${PORT}/searchquery`, {
		params: {
			value: query,
		},
	})
		.then((response) => setEmployeeList(() => response.data))
		.catch((error) => console.log(error));
}
