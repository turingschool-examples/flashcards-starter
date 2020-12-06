const http = require('http');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

const Game = require('../flashcards/src/Game.js');
<<<<<<< HEAD

const currentGame = new Game();
currentGame.start();
=======
const currentGame = new Game();
currentGame.start();
>>>>>>> 7a725bbf00a6705aec75717c60ba2819c218ee4b
