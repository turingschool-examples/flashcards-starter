const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck, round) {
  console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
  -----------------------------------------------------------------------`)
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion };