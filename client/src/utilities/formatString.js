export function formatPascalCase(string) {
	return string
		.toLowerCase()
		.replace(/(^\w{1})|(\s+\w{1})/g, (character) => character.toUpperCase());
}

//* --- Regular Expression Guide ---

//?    ^      - Matches the beginning of the string.
//?   \w      - Matches any word character.
//?   {1}     - Takes only the first character.

//?  ^\w{1}   - Matches the first letter of the word.
//?    |      - Boolean OR. It matches the expression after and before the |.
//?   \s+     - matches any amount of whitespace between the words.
