const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createDeck, countCards } = require('./deck');
const { createRound, takeTurn, trackGuess, calculatePercentCorrect, endRound } = require('./round');

function start(){
  const deck = prototypeQuestions; 
  const round = createRound(deck)
  countCards(deck)
  printMessage(deck);
  printQuestion(round);
  endRound(round);
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}


module.exports = { printMessage, printQuestion, start };
