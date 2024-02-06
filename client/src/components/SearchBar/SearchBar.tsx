import { TextField, Autocomplete } from '@mui/material/';
import {
	searchBarInterface,
	searchOptionInterface,
} from '../../interface/employeeInterface';

export default function SearchBar({
	employeeList,
	setSearchQuery,
}: searchBarInterface) {
	const defaultProps = {
		options: employeeList.map((option: searchOptionInterface) => ({
			id: option.id,
			firstName: option.firstName,
			lastName: option.lastName,
		})),
		getOptionLabel: (option: searchOptionInterface) =>
			`${option.firstName} ${option.lastName}`,
	};

	return (
		<Autocomplete
			className="w-full"
			autoComplete
			includeInputInList
			{...defaultProps}
			id="auto-complete"
			onChange={(event, value) => {
				value === null ? setSearchQuery(null) : setSearchQuery(value.id);
			}}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Search"
					variant="outlined"
					size="small"
				/>
			)}
		/>
	);
}
