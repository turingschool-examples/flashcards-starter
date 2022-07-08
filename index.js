// This is where your project starts.

const Game = require("./src/Game");
const data = require('./src/data');
const Deck = require("./src/Deck");
const Card = require('./src/Card');
const Turn = require('./src/Turn');
const Round = require('./src/Round');

const deck = new Deck(data.prototypeData);
const cardData = data.prototypeData
const game = new Game(deck);

game.start(deck, cardData)
