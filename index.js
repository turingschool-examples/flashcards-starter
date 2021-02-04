const http = require('http');
let app = http.createServer();
const Game = require('./src/Game');

let game = new Game;

game.start()

app.listen(3000, '127.0.0.1');
