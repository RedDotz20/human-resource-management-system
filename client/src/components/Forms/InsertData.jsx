import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { InsertQuery } from "../../data/Data";
import CloseIcon from "@mui/icons-material/Close";
import "../../styles/InsertData.css";
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

function InsertData() {
	const { setInsertModal } = useContext(GetValueContext);
	const { register, handleSubmit, errors } = useForm(),
		[fNameError, setfNameError] = useState(null),
		[lNameError, setLNameError] = useState(null),
		[ageError, setAgeError] = useState(null),
		[phoneNumError, setPhoneNumError] = useState(null);

	const onSubmit = (data) => {
		InsertQuery(data);
		setInsertModal(false);
	};

	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		age: "",
		sex: "",
		phoneNumber: "",
	});

	const handleChange = (props) => (event) => {
		setValues({ ...values, [props]: event.target.value });
	};

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
						setInsertModal(false);
					}}
				/>

				<h1 className="text-xl font-semibold mb-4">Insert Employee</h1>

				<form className="insertForm" onSubmit={handleSubmit(onSubmit)}>
					<TextField
						required
						{...register("firstName")}
						error={
							values.firstName.length > 40 || !validateString(values.firstName)
						}
						helperText={fNameError}
						name="firstName"
						autoFocus
						autoComplete="off"
						sx={{ my: 1 }}
						label="First Name"
						variant="outlined"
						size="small"
						onChange={handleChange("firstName")}
					/>

					<TextField
						{...register("lastName", { required: true })}
						error={
							values.lastName.length > 40 || !validateString(values.lastName)
						}
						helperText={lNameError}
						required
						name="lastName"
						sx={{ my: 1 }}
						label="Last Name"
						autoComplete="off"
						variant="outlined"
						size="small"
						onChange={handleChange("lastName")}
					/>

					<TextField
						required
						name="age"
						{...register("age", { required: true })}
						error={!validateAge(values.age)}
						helperText={ageError}
						sx={{ my: 1 }}
						label="Age"
						variant="outlined"
						autoComplete="off"
						size="small"
						onChange={handleChange("age")}
					/>

					<FormControl sx={{ my: 1 }}>
						<FormLabel required>Sex</FormLabel>
						<RadioGroup
							name="sex"
							{...register("sex", { required: true })}
							row
							onChange={handleChange("sex")}
						>
							<FormControlLabel
								label="Male"
								value="M"
								control={<Radio required={true} />}
							/>
							<FormControlLabel
								label="Female"
								value="F"
								control={<Radio required={true} />}
							/>
						</RadioGroup>
					</FormControl>

					<TextField
						required
						{...register("phoneNumber", { required: true })}
						error={
							values.phoneNumber.length > 11 ||
							!validateNumber(values.phoneNumber)
						}
						helperText={phoneNumError}
						name="phoneNumber"
						sx={{ my: 1 }}
						label="Phone Number"
						autoComplete="off"
						variant="outlined"
						size="small"
						onChange={handleChange("phoneNumber")}
					/>

					<footer>
						<Button
							className="cancel-btn"
							variant="contained"
							size="small"
							onClick={() => {
								setInsertModal(false);
							}}
						>
							Cancel
						</Button>
						<Button
							className="confirm-btn"
							variant="contained"
							size="small"
							color="success"
							type="submit"
							disabled={
								Object.values(values).includes("") ||
								(fNameError || lNameError || ageError || phoneNumError) !== null
							}
						>
							Confirm
						</Button>
					</footer>
				</form>
			</div>
		</div>
	);
}

export default InsertData;
