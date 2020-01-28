const http = require('http');
let app = http.createServer();

const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const util = require('./src/util');

const Turn = require('./src/Turn');
const Card = require('./src/Card');
const Deck = require('./src/Deck');
const Round = require('./src/Round');
const Game = require('./src/Game');

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

const game = new Game();

game.start();

exports.game = game;
