const http = require('http');
let app = http.createServer();
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('./src/Game');

var game = new Game();
game.start(prototypeQuestions);

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
