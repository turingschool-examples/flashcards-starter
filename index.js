// This is where your project starts.

const Game = require("./src/Game");
const data = require('./src/data');
const Deck = require("./src/Deck");

const deck = new Deck(data.prototypeData)
const game = new Game(deck);

// console.log(deck.cards);
game.start(deck)
