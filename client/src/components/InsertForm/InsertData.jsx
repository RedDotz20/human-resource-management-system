import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InsertQuery } from "../../data/Data";
import CloseIcon from "@mui/icons-material/Close";
import "./InsertData.css";
import {
	Button,
	TextField,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from "@mui/material";

function InsertData({ refreshState, setInsertModal }) {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		InsertQuery(data);
		refreshState();
		setInsertModal(false);
	};

	// const [values, setValues] = useState({
	// 	firstName: null,
	// 	lastName: null,
	// 	age: null,
	// 	sex: null,
	// 	phoneNumber: null,
	// });

	// const handleChange = (props) => (event) => {
	// 	setValues({ ...values, [props]: event.target.value });
	// };

	// const error = values.firstName === "";

	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<CloseIcon
					className="titleCloseBtn"
					onClick={() => {
						setInsertModal(false);
					}}
				/>

				<h1 className="title">Insert Employee</h1>

				<form className="insertForm" onSubmit={handleSubmit(onSubmit)}>
					<TextField
						{...register("firstName", { required: true })}
						name="firstName"
						autoFocus
						sx={{ my: 1 }}
						label="First Name"
						variant="outlined"
						size="small"
						// onChange={handleChange("firstName")}
					/>

					<TextField
						name="lastName"
						{...register("lastName", { required: true })}
						sx={{ my: 1 }}
						label="Last Name"
						variant="outlined"
						size="small"
						// onChange={handleChange("lastName")}
					/>

					<TextField
						name="age"
						{...register("age", { required: true })}
						sx={{ my: 1 }}
						label="Age"
						variant="outlined"
						type="number"
						size="small"
						InputProps={{ inputProps: { min: 1, max: 99 } }}
						// onChange={handleChange("age")}
					/>

					<FormControl sx={{ my: 1 }}>
						<FormLabel required>Sex</FormLabel>
						<RadioGroup
							name="sex"
							{...register("sex", { required: true })}
							row
							// onChange={handleChange("sex")}
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
						{...register("phoneNumber", { required: true })}
						name="phoneNumber"
						sx={{ my: 1 }}
						label="Phone Number"
						variant="outlined"
						size="small"
						// onChange={handleChange("phoneNumber")}
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
