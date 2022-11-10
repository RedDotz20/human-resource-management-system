import React, { useState, useContext } from "react";
import { UpdateQuery } from "../../data/Data";
import CloseIcon from "@mui/icons-material/Close";
import "./UpdateData.css";
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

function UpdateData({ employeeList, refreshState, setUpdateModal }) {
	const { updateId } = useContext(GetValueContext),
		indexId = employeeList.map((values) => values.id).indexOf(updateId),
		[values, setValues] = useState({
			firstName: employeeList[indexId].firstName,
			lastName: employeeList[indexId].lastName,
			age: employeeList[indexId].age,
			sex: employeeList[indexId].sex,
			phoneNumber: employeeList[indexId].phoneNumber,
		});

	const handleChange = (props) => (event) => {
		setValues({ ...values, [props]: event.target.value });
	};

	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<CloseIcon
					className="titleCloseBtn"
					onClick={() => {
						setUpdateModal(false);
					}}
				/>

				<h1 className="title">Update Employee</h1>

				<TextField
					sx={{ my: 1 }}
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
					label="Age"
					variant="outlined"
					name="age"
					type="number"
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
						onClick={() => {
							UpdateQuery(values, updateId);
							refreshState();
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
