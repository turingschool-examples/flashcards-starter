const data = require('../flashcards/src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('../flashcards/src/Game');
const Card = require('../flashcards/src/Card')

const gameData = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer))
const game = new Game();

game.start(gameData);
console.log('Your project is running...'); 