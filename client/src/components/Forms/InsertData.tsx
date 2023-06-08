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
import { FieldValues, useForm } from 'react-hook-form';
import { InsertQuery } from '../../api/Data';
import { useValidate } from '../../hooks/useValidate';
import { useModal } from '../Modal/Modal';

export default function InsertData() {
	const { setInsert } = useModal((state) => ({
		setInsert: state.setInsert,
	}));

	const { register, handleSubmit } = useForm();

	const [valFname, changeFname, fnameError] = useValidate('firstName');
	const [valLname, changelname, lnameError] = useValidate('lastName');
	const [valAge, changeAge, ageError] = useValidate('age');
	const [valPhone, changePhone, phoneError] = useValidate('phoneNumber');

	function onSubmit(data: FieldValues) {
		console.log(data);
		InsertQuery(data);
		setInsert();
	}

	return (
		<div className="animate-BgModal fixed z-10 flex justify-center items-center w-screen h-screen bg-black/50">
			<div className="animate-ConModal bg-slate-50 relative flex flex-col p-7 w-[26.25rem] h-[31.25rem] rounded-xl shadow-2xl">
				<CloseIcon
					className="absolute z-[5] right-6 top-6 text-[red] cursor-pointer"
					onClick={() => setInsert()}
				/>

				<h1 className="text-xl font-semibold mb-4">Insert Employee</h1>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col h-full"
				>
					<TextField
						{...register('firstName')}
						required
						error={fnameError !== null}
						helperText={fnameError}
						name="firstName"
						autoFocus
						autoComplete="off"
						sx={{ my: 1 }}
						label="First Name"
						variant="outlined"
						size="small"
						onChange={changeFname}
					/>

					<TextField
						{...register('lastName', { required: true })}
						error={lnameError !== null}
						helperText={lnameError}
						required
						name="lastName"
						sx={{ my: 1 }}
						label="Last Name"
						autoComplete="off"
						variant="outlined"
						size="small"
						onChange={changelname}
					/>

					<TextField
						{...register('age', { required: true })}
						required
						name="age"
						error={ageError !== null}
						helperText={ageError}
						sx={{ my: 1 }}
						label="Age"
						variant="outlined"
						autoComplete="off"
						size="small"
						onChange={changeAge}
					/>

					<FormControl sx={{ my: 1 }}>
						<FormLabel required>Sex</FormLabel>
						<RadioGroup
							row
							name="sex"
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
						required
						{...register('phoneNumber', { required: true })}
						error={phoneError !== null}
						helperText={phoneError}
						name="phoneNumber"
						sx={{ my: 1 }}
						label="Phone Number"
						autoComplete="off"
						variant="outlined"
						size="small"
						onChange={changePhone}
					/>

					<footer className="inline-flex justify-between mt-auto">
						<Button
							className="w-[49%] h-9 text-2xl text-[#fff] rounded-lg cursor-pointer "
							variant="contained"
							size="small"
							onClick={() => setInsert()}
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
