const { createDeck } = require ('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require ('../src/round');
const { prototypeData } = require ( '../src/data');
const { printMessage, printQuestion } = require ('../src/game');

function start() {
  const deck = createDeck(prototypeData);
  printMessage(deck);
  const round = createRound(deck);
  printQuestion(round);
  takeTurn(0,round);
  calculatePercentCorrect(round);
  if (round.turns > 30) {
    endRound(round);
  };
};

start();

console.log('Your project is running...'); 
