const http = require('http');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

const Game = require('./src/Game.js')
// const Round = require('/Users/davepernitz/turing/mod2/projects/flash-cards/src/Round.js')
// const round
const game = new Game()
game.start()

// function newRound(currentRound) {
//   game.start(currentRound)
// }
