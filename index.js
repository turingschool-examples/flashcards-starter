const http = require('http');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 

const Card = require('./src/Card');
const Deck = require('./src/Deck');
const Turn = require('./src/Turn');
const Round = require('./src/Round');
const Game = require('./src/Game');
const util = require('./src/util');
const data = require('./src/data');

