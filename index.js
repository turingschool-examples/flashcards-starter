// This is where your project starts.
const { prototypeData } = require('./src/data');
const { createDeck, createRound } = require('./src/card');
const game = require('./src/game');


function start() {
  const deck = createDeck(prototypeData);
  const round = createRound(deck);

  // Display the welcome message and start the game
  game.printMessage(deck);
  game.printQuestion(round);
}

start();


console.log('Your project is running...'); 
