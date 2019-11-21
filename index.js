/* eslint-disable no-console */
const http = require('http');
const Game = require('../terminal-cards/src/Game.js')
let app = http.createServer();



// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 
const game = new Game()
game.start();