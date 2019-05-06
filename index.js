const http = require('http');
const Game = require('./src/Game')
const Deck = require('./src/Deck');
const Round = require('./src/Round');
const game = new Game();
game.start();
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000');