// const Game = require('./Game');
// const data = require('./data');
const Game = require('./src/Game')
const data = require('./src/data')
// This is where your project starts.
//instantiate game 
var game = new Game(data.prototypeData)
game.start()
//call start on game 
console.log('Your project is running...'); 
