import { TextField, Autocomplete } from "@mui/material/";

interface optionInterface {
	id: number;
	firstName: string;
	lastName: string;
}

export default function SearchBar({ employeeList, setSearchQuery }: any) {
	const defaultProps = {
		options: employeeList.map((option: optionInterface) => ({
			id: option.id,
			firstName: option.firstName,
			lastName: option.lastName,
		})),
		getOptionLabel: (option: optionInterface) =>
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
				<TextField {...params} label="Search" variant="outlined" size="small" />
			)}
		/>
	);
}
