import { geeksay, getRandomQuote, getRandomTranslation } from "./helpers.js";
import express from "express";
const app = express();
app.use(express.text());
const port = 4000;

// translate quote to geek
app.post("/", (req, res) => {
	res.send(geeksay(req.body));
});

// get a randow quote and see it translated to geek
app.get("/random", (req, res) => {
	const randomQuote = getRandomQuote();
	res.send(`${randomQuote} -> ${geeksay(randomQuote)}`);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
