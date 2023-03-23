const data = require('../flashcards/src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('../flashcards/src/Game');

const game = new Game();

game.start(prototypeQuestions);
console.log('Your project is running...'); 
