// This is where your project starts.
const Game = require('./src/Game');

var game = new Game();

game.start();

console.log('Your project is running...'); 

module.exports = Game;
