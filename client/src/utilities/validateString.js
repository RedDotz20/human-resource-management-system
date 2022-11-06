export default function validateString(string) {
	const objAlphaPattern = new Regex('@"^[a-zA-Z0-9_@.-]*$"');
	const sts = objAlphaPattern.IsMatch(string);
	return sts;
}

console.log(validateString("hello world"));
