const http = require('http');
const Game = require('./src/Game');
const Round = require('./src/round');

let app = http.createServer();

var game = new Game();
game.start();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
