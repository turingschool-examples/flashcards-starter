const Game = require("./src/Game");
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;

// This is where your project starts.
console.log('Your project is running...'); 
const game = new Game(prototypeQuestions);
game.start();
