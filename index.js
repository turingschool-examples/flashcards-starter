const http = require('http');
let app = http.createServer();
const Game = require("./src/Game");
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

const newGame = new Game(prototypeQuestions);
newGame.start();
