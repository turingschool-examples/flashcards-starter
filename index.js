// This is where your project starts.
const Game = require('./src/Game');
// const Round = require('./src/Round');
// const Card = require('./src/Card');
// const Deck = require('./src/Deck');
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;

const newGame = new Game();

newGame.start(prototypeQuestions);

console.log('Your project is running...'); 
