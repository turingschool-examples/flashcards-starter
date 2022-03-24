// This is where your project starts.

const Card = require('../flashcards-starter/src/Card');
const Turn = require('../flashcards-starter/src/Turn');
const Deck = require('../flashcards-starter/src/Deck');
const Round = require('../flashcards-starter/src/Round');
const Game = require('../flashcards-starter/src/Game');
const data = require('../flashcards-starter/src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../flashcards-starter/src/util');

const game = new Game;

game.start();
