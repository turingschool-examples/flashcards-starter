const Game = require('./src/Game.js')
const data = require('./src/data.js');
const prototypeQuestions = data.prototypeData;
const http = require('http');
let app = http.createServer();
var currentgame = new Game ()
currentgame.start(prototypeQuestions)
// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 