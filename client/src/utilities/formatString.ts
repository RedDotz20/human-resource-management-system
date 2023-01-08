const formatPascalCase = (string: string) => {
	const regex = /(^\w{1})|(\s+\w{1})/g,
		lowercase = string.toLowerCase(),
		formatedString = lowercase.replace(regex, (char) => char.toUpperCase());
	return formatedString;
};

export { formatPascalCase };
