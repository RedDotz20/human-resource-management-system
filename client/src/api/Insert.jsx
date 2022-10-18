import React from "react";

export default function SubmitData({
	URL,
	firstName,
	lastName,
	age,
	phoneNumber,
}) {
	Axios.post(`${URL}/insert`, {
		firstName: firstName,
		lastName: lastName,
		age: age,
		sex: sex,
		phoneNumber: phoneNumber,
	});
}
