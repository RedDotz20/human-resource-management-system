import { useState, useEffect } from "react";
import {
	validateString,
	validateAge,
	validateNumber,
} from "../utilities/validateString";

export function useValidate(fieldName) {
	const [value, setValue] = useState("");
	const [handleError, setHandleError] = useState(null);

	const error = {
		fieldLimit: "Invalid Input: Characters must not exceed up to 40",
		range: "Input Out of Range",
		invalid: "Invalid Input",
		invalidChar: "Invalid Character",
		digitLimit: "Input must not exceed up to 11 digits",
		numberOnly: "Numbers Only",
	};

	const handleChange = (event) => {
		setValue(event.target.value);
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

	return [value, handleChange, handleError];
}
