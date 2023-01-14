const formatPascalCase = (string: string) => {
	const regex = /(^\w{1})|(\s+\w{1})/g,
		lowercase = string.toLowerCase(),
		formatedString = lowercase.replace(regex, (char) => char.toUpperCase());
	return formatedString;
};

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

export { formatPascalCase, validateString, validateNumber, validateAge };
