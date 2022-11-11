export function validateString(string) {
	return /^(\s*|\D+)$/.test(string);
}

export function validateNumber(number) {
	return /^(\s*|\d+)$/.test(number);
}

export function validateAge(age) {
	return /(^\s*$|^[1-9]$|^[1-9][0-9]$)/.test(age);
}
