import { translations, quotes } from "./db.js";

function isNumeric(num) {
	return !isNaN(parseInt(num));
}

export function geeksay(text) {
	const input = Array.isArray(text) ? text : String(text).split(" ");
	return input.map(geeksayWord).join(" ");
}

function geeksayWord(word) {
	if (isNumeric(word)) {
		return (word >>> 0).toString(2);
	} else {
		const lowerCaseText = removeSymbols(word).toLowerCase();
		if (translations.hasOwnProperty(lowerCaseText)) {
			word = word
				.toLowerCase()
				.replace(lowerCaseText, translations[lowerCaseText]);
		}
		return word;
	}
}

function removeSymbols(word) {
	return word.replace(/(?!\n|\r\n)[^a-zA-Z0-9]+/, "");
}

export function getRandomTranslation() {
	const keys = Object.keys(translations);
	const randomKey = keys[Math.floor(Math.random() * keys.length)];
	return {
		no_geek: randomKey,
		geeked: translations[randomKey],
	};
}

export function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}
