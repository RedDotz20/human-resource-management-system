const validateString = (string: string) => {
	const regex = /^(\s*|\D+)$/;
	return regex.test(string);
};

const validateNumber = (num: string) => {
	const regex = /^(\s*|\d+)$/;
	return regex.test(num);
};

const validateAge = (age: string) => {
	const regex = /(^\s*$|^[1-9]$|^[1-9][0-9]$)/;
	return regex.test(age);
};

export { validateString, validateNumber, validateAge };
