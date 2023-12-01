const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const {   createDeck,
  countCards,
  createCard,
  evaluateGuess,
  createRound,
  calculatePercentCorrect,
  endRound,
  takeTurn, } = require('./card');


function start() {
  const deck = prototypeQuestions
  let round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
}







function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion, start };
