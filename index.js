console.log("Trashman js loaded");
function updateQuoteText(newQuote) {
	document.getElementById("greenman").innerHTML = newQuote;
};
var quoteArray = [
	"She was the best hoor I ever knew",
	"I just want to be pure",
	"I am a Golden God!",
	"Whoops, I seemed to have dropped my monster condom that I use on my magnum dong!"
];
function pickRandomQuote() {
	return quoteArray[Math.floor(Math.random() * quoteArray.length)];
};
function newQuote() {
	updateQuoteText(pickRandomQuote());
};
