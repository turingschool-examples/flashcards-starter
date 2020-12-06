const http = require('http');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

const Game = require('../flashcards/src/Game.js');
const currentGame = new Game();
currentGame.start();
