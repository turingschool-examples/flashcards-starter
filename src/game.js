const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { countCards, createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentageCorrect, endRound } = require('../src/round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

const start = (cards) => {
  deck = createDeck(cards)
  printMessage(deck)
  round = createRound(deck)
  printQuestion(round) 
}

module.exports = { printMessage, printQuestion, start };
