import { translations, quotes } from "./db.js";

function isNumeric(num) {
	return /^-?\d+(\.\d+)?$/.test(num);
}

const translationsArray = Object.keys(translations)
	.map((layman) => ({
		layman: layman.split(" "),
		geek: translations[layman],
	}))
	.sort((a, b) => b.layman.length - a.layman.length);

export function geeksay(text) {
	const input = Array.isArray(text) ? text : String(text).split(" ");
	const numsProcessed = input.map(geeksayWord);
	const numsLC = numsProcessed.map((str) => str.toLowerCase());
	const numsNoSymbols = numsLC.map(removeSymbols);
	for (const translation of translationsArray) {
		const joinedLayman = translation.layman.join(" ");
		for (let i = 0; i < numsProcessed.length; i++) {
			const toMatch = numsNoSymbols.slice(
				i,
				i + translation.layman.length
			);
			if (toMatch.join(" ") === joinedLayman) {
				const newText = numsLC
					.slice(i, i + translation.layman.length)
					.join(" ")
					.split(joinedLayman)
					.join(translation.geek);
				numsProcessed.splice(i, translation.layman.length, newText);
				numsNoSymbols.splice(i, translation.layman.length, newText);
				numsLC.splice(i, translation.layman.length, newText);
			}
		}
	}
	return numsProcessed.join(" ");
}

function geeksayWord(word) {
	if (isNumeric(word)) {
		return Math.trunc(text).toString(2);
	}
	return word;
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
