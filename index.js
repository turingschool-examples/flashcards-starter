const Game = require('./src/Game');
const http = require('http');
const util = require('./src/util');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1', undefined , () => {
  let game = new Game();
  game.start();
  app.close();
});
