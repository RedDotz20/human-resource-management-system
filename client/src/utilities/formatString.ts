export const formatPascalCase = (string: string) => {
	const regex = /(^\w{1})|(\s+\w{1})/g,
		lowercase = string.toLowerCase(),
		formatedString = lowercase.replace(regex, (char) => char.toUpperCase());
	return formatedString;
};

export const validateString = (string: string) => {
	const regex = /^(\s*|\D+)$/;
	return regex.test(string);
};

export const validateNumber = (num: string) => {
	const regex = /^(\s*|\d+)$/;
	return regex.test(num);
};

export const validateAge = (age: string) => {
	const regex = /(^\s*$|^[1-9]$|^[1-9][0-9]$)/;
	return regex.test(age);
};
