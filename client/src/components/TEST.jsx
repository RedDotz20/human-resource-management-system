import React from "react";

export default function TEST() {
	return (
		<div>
			<label>
				<input
					type="text"
					className="first-name"
					placeholder="First Name"
					onChange={(event) => {
						setFirstName(event.target.value);
					}}
					value={firstName}
				/>
			</label>
			<label>
				<input
					type="text"
					className="last-name"
					placeholder="Last Name"
					onChange={(event) => {
						setLastName(event.target.value);
					}}
					value={lastName}
				/>
			</label>
			<label>
				<input
					type="number"
					className="age"
					placeholder="Age"
					onChange={(event) => {
						setAge(event.target.value);
					}}
					value={age}
				/>
			</label>
			<label>
				<input
					type="text"
					className="sex"
					placeholder="Sex"
					onChange={(event) => {
						setSex(event.target.value);
					}}
					value={sex}
				/>
			</label>
			<label>
				<input
					type="number"
					className="phone-number"
					placeholder="Phone Number"
					onChange={(event) => {
						setPhoneNumber(event.target.value);
					}}
					value={phoneNumber}
				/>
			</label>
		</div>
	);
}
