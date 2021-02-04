import { geeksay, getRandomQuote, getRandomTranslation } from "./helpers.js";
import express from "express";
const app = express();
app.use(express.text());
const port = 4000;

// translate quote to geek
app.post("/", (req, res) => {
	res.send({
		no_geek: req.body,
		geeked: geeksay(req.body),
	});
});

// get a random quote and see it translated to geek
app.get("/random_quote", (req, res) => {
	const randomQuote = getRandomQuote();
	res.send({
		no_geek: randomQuote,
		geeked: geeksay(randomQuote),
	});
});

// get a random word and translate it to geek
app.get("/random_word", (req, res) => {
	const random = getRandomTranslation();
	res.send({
		no_geek: random.no_geek,
		geeked: random.geeked,
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
