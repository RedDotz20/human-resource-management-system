export function formatPascalCase(string) {
	return string
		.toLowerCase()
		.replace(/(^\w{1})|(\s+\w{1})/g, (character) => character.toUpperCase());
}
