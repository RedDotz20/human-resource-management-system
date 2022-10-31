import Axios from "axios";
const PORT = 3000;

export default function getSearchQueries(setQueries) {
	Axios.get(`http://localhost:${PORT}/searchquery`)
		.then((response) => {
			setQueries(() =>
				response.data.map((value) => {
					const fName = value.firstName.toLowerCase();
					const lName = value.LastName.toLowerCase();
					return `${fName} ${lName}`;
				})
			);
		})
		.catch((error) => console.log(error));
}
