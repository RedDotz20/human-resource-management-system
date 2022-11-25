import React, { useState, useEffect, useContext } from "react";
import { UpdateQuery } from "../../data/Data";
import CloseIcon from "@mui/icons-material/Close";
import {
	validateString,
	validateAge,
	validateNumber,
} from "../../utilities/validateString";
import {
	Button,
	TextField,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from "@mui/material";

import { GetValueContext } from "../../contexts/Contexts";

function UpdateData({ employeeList, setUpdateModal }) {
	const { updateId } = useContext(GetValueContext),
		indexId = employeeList.map((values) => values.id).indexOf(updateId);

	const { firstName, lastName, age, sex, phoneNumber } = employeeList[indexId],
		[values, setValues] = useState({
			firstName: firstName,
			lastName: lastName,
			age: age,
			sex: sex,
			phoneNumber: phoneNumber,
		});

	const handleChange = (props) => (event) => {
		setValues({ ...values, [props]: event.target.value });
	};

	const [fNameError, setfNameError] = useState(null);
	const [lNameError, setLNameError] = useState(null);
	const [ageError, setAgeError] = useState(null);
	const [phoneNumError, setPhoneNumError] = useState(null);

	//* Validate First Name Field
	useEffect(() => {
		if (values.firstName.length > 40) {
			setfNameError("Invalid Input: Characters must not exceed up to 40");
		} else if (!validateString(values.firstName)) {
			setfNameError("Invalid Characters");
		} else {
			setfNameError(null);
		}
	}, [values.firstName, fNameError]);

	//* Validate Last Name Field
	useEffect(() => {
		if (values.lastName.length > 40) {
			setLNameError("Invalid Input: Characters must not exceed up to 40");
		} else if (!validateString(values.lastName)) {
			setLNameError("Invalid Characters");
		} else {
			setLNameError(null);
		}
	}, [values.lastName, lNameError]);

	//* Validate Age Field
	useEffect(() => {
		if (!validateAge(values.age)) {
			setAgeError("Input Out of Range");
		} else {
			setAgeError(null);
		}
	}, [values.age, ageError]);

	//* Validate Phone Number Field
	useEffect(() => {
		if (values.phoneNumber.length > 11) {
			setPhoneNumError("Input must not exceed up to 11 digits");
		} else if (!validateNumber(values.phoneNumber)) {
			setPhoneNumError("Numbers only");
		} else {
			setPhoneNumError(null);
		}
	}, [values.phoneNumber, phoneNumError]);

	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<CloseIcon
					className="titleCloseBtn"
					onClick={() => {
						setUpdateModal(false);
					}}
				/>

				<h1 className="text-xl font-semibold mb-4">Update Employee</h1>

				<TextField
					sx={{ my: 1 }}
					error={
						values.firstName.length > 40 || !validateString(values.firstName)
					}
					helperText={fNameError}
					label="First Name"
					variant="outlined"
					size="small"
					name="firstName"
					autoComplete="off"
					defaultValue={employeeList[indexId].firstName}
					onChange={handleChange("firstName")}
				/>

				<TextField
					sx={{ my: 1 }}
					error={
						values.lastName.length > 40 || !validateString(values.lastName)
					}
					helperText={lNameError}
					label="Last Name"
					name="lastName"
					variant="outlined"
					size="small"
					autoComplete="off"
					defaultValue={employeeList[indexId].lastName}
					onChange={handleChange("lastName")}
				/>

				<TextField
					sx={{ my: 1 }}
					error={!validateAge(values.age)}
					helperText={ageError}
					label="Age"
					variant="outlined"
					name="age"
					size="small"
					autoComplete="off"
					defaultValue={employeeList[indexId].age}
					onChange={handleChange("age")}
				/>

				<FormControl sx={{ my: 1 }}>
					<FormLabel>Sex</FormLabel>
					<RadioGroup
						row
						name="sex"
						defaultValue={employeeList[indexId].sex}
						onChange={handleChange("sex")}
					>
						<FormControlLabel label="Male" value="M" control={<Radio />} />
						<FormControlLabel label="Female" value="F" control={<Radio />} />
					</RadioGroup>
				</FormControl>

				<TextField
					sx={{ my: 1 }}
					error={
						values.phoneNumber.length > 11 ||
						!validateNumber(values.phoneNumber)
					}
					helperText={phoneNumError}
					label="Phone Number"
					variant="outlined"
					name="phoneNumber"
					size="small"
					autoComplete="off"
					defaultValue={employeeList[indexId].phoneNumber}
					onChange={handleChange("phoneNumber")}
				/>

				<footer>
					<Button
						className="cancel-btn"
						variant="contained"
						size="small"
						onClick={() => {
							setUpdateModal(false);
						}}
					>
						Cancel
					</Button>
					<Button
						className="confirm-btn"
						variant="contained"
						size="small"
						color="success"
						disabled={
							Object.values(values).includes("") ||
							(fNameError || lNameError || ageError || phoneNumError) !== null
						}
						onClick={() => {
							UpdateQuery(values, updateId);
							setUpdateModal(false);
						}}
					>
						Confirm
					</Button>
				</footer>
			</div>
		</div>
	);
}

export default UpdateData;
