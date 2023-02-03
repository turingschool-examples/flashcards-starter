const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const util = require('./src/util');
const Card = require('./src/Card');
const Deck = require('./src/Deck');
const Game = require('./src/Game');
const Round = require('./src/Round');

console.log('Your project is running...'); 


const game = new Game()
game.start()



