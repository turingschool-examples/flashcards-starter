// This is where your project starts.

// need to import game, create a new game with all required data, and call start()
const flashcards = require('./src/data');
const Game = require('./src/Game');
const Round = require('./src/Round');
const Deck = require('./src/Deck');
const Card = require('./src/Card');


let cards = 
[
  new Card(flashcards.prototypeData[0]),
  new Card(flashcards.prototypeData[1]),
  new Card(flashcards.prototypeData[2]),
];
let deck = new Deck(cards);
let round = new Round(deck);
let game = new Game(round);

game.start();

console.log('Your project is running...'); 
