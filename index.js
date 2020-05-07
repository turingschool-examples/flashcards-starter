const http = require('http');
let app = http.createServer();


// Start the server on port 3000
app.listen(3000, '127.0.0.1');  

const Game = require('./src/Game');

// const deck = new Deck(prototypeData);
// const round = new Round(deck);

const game = new Game();
game.start();