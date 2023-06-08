import CloseIcon from '@mui/icons-material/Close';
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material';
import { useContext, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { UpdateQuery } from '../../api/Data';
import { GetValueContext } from '../../contexts/Contexts';
import { useValidate } from '../../hooks/useValidate';
import { employeePropsInterface } from '../../interface/employeeInterface';
import { useModal } from '../Modal/Modal';

function UpdateData({ employeeList }: employeePropsInterface) {
	const { register, handleSubmit } = useForm();
	const { updateId } = useContext(GetValueContext);
	const indexId = employeeList.map((values) => values.id).indexOf(updateId);

	const { setUpdate } = useModal((state) => ({
		setUpdate: state.setUpdate,
	}));

	const [valFname, changeFname, fnameError, fnameDefault] =
		useValidate('firstName');
	const [valLname, changelname, lnameError, lnameDefault] =
		useValidate('lastName');
	const [valAge, changeAge, ageError, ageDefault] = useValidate('age');
	const [valSex, changeSex, sexError, sexDefault] = useValidate('sex');
	const [valPhone, changePhone, phoneError, phoneDefault] =
		useValidate('phoneNumber');

	function onSubmit(data: FieldValues) {
		console.log(data);
		UpdateQuery(data, updateId);
		setUpdate();
	}

	useEffect(() => {
		const { firstName, lastName, age, sex, phoneNumber } =
			employeeList[indexId];
		fnameDefault(firstName);
		lnameDefault(lastName);
		ageDefault(age.toString());
		sexDefault(sex);
		phoneDefault(phoneNumber);
	}, []);

	return (
		<div className="animate-BgModal fixed z-10 flex justify-center items-center w-screen h-screen bg-black/50">
			<div className="animate-ConModal bg-slate-50 relative flex flex-col p-7 w-[26.25rem] h-[31.25rem] rounded-xl shadow-2xl">
				<CloseIcon
					className="absolute z-[5] right-6 top-6 text-[red] cursor-pointer"
					onClick={() => setUpdate()}
				/>

				<h1 className="text-xl font-semibold mb-4">Update Employee</h1>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col h-full"
				>
					<TextField
						{...register('firstName', { required: true })}
						name="firstName"
						sx={{ my: 1 }}
						error={fnameError !== null}
						helperText={fnameError}
						label="First Name"
						variant="outlined"
						size="small"
						autoComplete="off"
						defaultValue={employeeList[indexId].firstName}
						onChange={changeFname}
					/>

					<TextField
						{...register('lastName', { required: true })}
						name="lastName"
						sx={{ my: 1 }}
						error={lnameError !== null}
						helperText={lnameError}
						label="Last Name"
						variant="outlined"
						size="small"
						autoComplete="off"
						defaultValue={employeeList[indexId].lastName}
						onChange={changelname}
					/>

					<TextField
						{...register('age', { required: true })}
						name="age"
						sx={{ my: 1 }}
						error={ageError !== null}
						helperText={ageError}
						label="Age"
						variant="outlined"
						size="small"
						autoComplete="off"
						defaultValue={employeeList[indexId].age}
						onChange={changeAge}
					/>

					<FormControl sx={{ my: 1 }}>
						<FormLabel>Sex</FormLabel>
						<RadioGroup
							row
							name="sex"
							defaultValue={employeeList[indexId].sex}
							onChange={changeSex}
						>
							<FormControlLabel
								{...register('sex', { required: true })}
								label="Male"
								value="M"
								control={<Radio />}
							/>
							<FormControlLabel
								{...register('sex', { required: true })}
								label="Female"
								value="F"
								control={<Radio />}
							/>
						</RadioGroup>
					</FormControl>

					<TextField
						{...register('phoneNumber', { required: true })}
						sx={{ my: 1 }}
						error={phoneError !== null}
						helperText={phoneError}
						label="Phone Number"
						variant="outlined"
						name="phoneNumber"
						size="small"
						autoComplete="off"
						defaultValue={employeeList[indexId].phoneNumber}
						onChange={changePhone}
					/>

					<footer className="inline-flex justify-between mt-auto">
						<Button
							className="w-[49%] h-9 text-2xl text-[#fff] rounded-lg cursor-pointer"
							variant="contained"
							size="small"
							onClick={() => setUpdate()}
						>
							Cancel
						</Button>
						<Button
							className="w-[49%] h-9 text-2xl text-[#fff] rounded-lg cursor-pointer"
							variant="contained"
							size="small"
							color="success"
							type="submit"
							disabled={
								(valFname && valLname && valAge && valPhone) === '' ||
								(fnameError || lnameError || ageError || phoneError) !== null
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

export default UpdateData;
