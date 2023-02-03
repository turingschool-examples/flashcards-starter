// This is where your project starts.
const Game = require("./src/Game")
const data = require("./src/data");
const prototypeQuestions = data.prototypeData;

const newGame = new Game(prototypeQuestions);
newGame.start()
console.log('Your project is running...'); 
