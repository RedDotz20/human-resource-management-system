import { useState, useEffect } from "react";
import {
	validateString,
	validateAge,
	validateNumber,
} from "../utilities/formatString";

const error = {
	fieldLimit: "Invalid Input: Characters must not exceed up to 40",
	range: "Input Out of Range",
	invalid: "Invalid Input",
	invalidChar: "Invalid Character",
	digitLimit: "Input must not exceed up to 11 digits",
	numberOnly: "Numbers Only",
};

export function useValidate(fieldName: string) {
	const [value, setValue] = useState("");
	const [handleError, setHandleError] = useState<any>(null);

	const handleChange = (event: any) => {
		setValue(event.target.value);
	};

	const setDefault = (defaultValue: string) => {
		setValue(defaultValue);
	};

	useEffect(() => {
		switch (fieldName) {
			case "firstName":
				if (value.length > 40) {
					setHandleError(error.fieldLimit);
				} else if (!validateString(value)) {
					setHandleError(error.invalidChar);
				} else {
					setHandleError(null);
				}
				break;

			case "lastName":
				if (value.length > 40) {
					setHandleError(error.fieldLimit);
				} else if (!validateString(value)) {
					setHandleError(error.invalidChar);
				} else {
					setHandleError(null);
				}
				break;

			case "age":
				if (!validateAge(value)) {
					setHandleError(error.range);
				} else {
					setHandleError(null);
				}
				break;

			case "sex":
				if (value !== ("M" || "F")) {
					setHandleError(error.invalid);
				} else {
					setHandleError(null);
				}
				break;

			case "phoneNumber":
				if (value.length > 11) {
					setHandleError(error.digitLimit);
				} else if (!validateNumber(value)) {
					setHandleError(error.numberOnly);
				} else {
					setHandleError(null);
				}
				break;
		}
	}, [value]);

	return [value, handleChange, handleError, setDefault];
}
