import React from "react";
import Axios from "axios";

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
