// This is where your project starts.
const Game = require("./src/Game")

let game = new Game();
game.start();
console.time('Game Run Time');
console.log('Your project is running...');
