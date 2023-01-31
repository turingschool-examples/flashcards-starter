// This is where your project starts.

const Game = require("./src/Game");
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;

const game = new Game();

console.log('Your project is running...'); 
game.start(prototypeQuestions);

