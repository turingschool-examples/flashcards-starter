// const http = require('http');
// let app = http.createServer();

// // Start the server on port 3000
// app.listen(3000, '127.0.0.1');
// console.log('Node server running on port 3000');
function startGame() {
  const Game = require('./src/Game');
  const Round = require('./src/Round');
  const Deck = require('./src/Deck');
  const data = require('./src/data').prototypeData;

  const game = new Game();
  const deck = new Deck(data);
  const round = new Round(deck);

  console.log(game.printMessage(deck, round));

  game.printQuestion(round, startGame);
}

startGame();
//   round.endRound();

// })();

