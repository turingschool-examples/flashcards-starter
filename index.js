const http = require('http');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Turn = require('./Turn');
const Game = require('./Game');