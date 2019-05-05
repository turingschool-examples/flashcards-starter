const http = require('http');
let app = http.createServer();
let Game = require('./src/Game');

function runner() {
  let game = new Game();
  game.start();
}

runner()

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 