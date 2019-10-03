const http = require('http');
let app = http.createServer();
let Game = require('./src/Game');



// Start the server on port 3000
app.listen(3000, '127.0.0.1');   
let game = new Game();
game.start();
