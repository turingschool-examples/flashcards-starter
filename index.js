// This is where your project starts.


const data = require('./src/data');
const Card = require('./src/Card');
const Turn = require('./src/Turn');
const Deck = require("./src/Deck");
const Round = require('./src/Round');
const Game = require("./src/Game");

const deck = new Deck(data.games.prototype);
const cardData = data.games.prototype;
const game = new Game(deck);

const deck2 = new Deck(data.games.dataTypes);
const cardData2 = data.games.dataTypes;
const game2 = new Game(deck2)

game.start(deck, cardData);
// game2.start(deck2, cardData2);
